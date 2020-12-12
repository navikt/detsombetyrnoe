import * as React from "react";
import styled, { keyframes } from "styled-components";
import { isNøkkeltallTekst, NøkkeltallListe, NøkkeltallTekst } from "./types";
import { navFrontend } from "../../styles/navFarger";
import useInViewport from "../../utils/useInViewport";
import { useRef } from "react";

const Style = styled.li`
  text-align: center;
  > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const animation = keyframes`
  from {
    transform: rotateX(90deg) scaleY(2) translateY(-.5rem);
  }
`;

const NumberStyle = styled.p<{ inVeiwport: boolean; delay: number }>`
  animation: ${animation} 0.5s backwards;
  animation-delay: ${(props) => props.delay}s;
  animation-play-state: ${(props) => (props.inVeiwport ? "running" : "paused")};
  transform-origin: bottom;
  font-size: 5rem;
  line-height: 0.9;
  font-weight: 600;
  color: ${navFrontend.navGronnLighten40};
`;

const TitleStyle = styled.p`
  font-weight: bold;
`;

const TekstStyle = styled.p`
  font-size: 0.7rem;
`;

interface Props {
  nøkkeltall: NøkkeltallListe | NøkkeltallTekst;
  inViewport: boolean;
}

function Tall(props: Props) {
  const nøkkeltall = props.nøkkeltall;
  const tall = isNøkkeltallTekst(nøkkeltall) ? nøkkeltall.antall : nøkkeltall.liste?.length;
  const tittel = nøkkeltall.title;
  const description = isNøkkeltallTekst(nøkkeltall) ? nøkkeltall.description : nøkkeltall.liste?.join(", ");

  const ref = useRef<HTMLLIElement>(null);
  const rect = ref.current?.getBoundingClientRect();
  const delay = rect ? (rect.left / 3 + rect.top / 4) * 0.001 : 0;

  return (
    <Style ref={ref}>
      <NumberStyle inVeiwport={props.inViewport} delay={delay}>
        {tall}
      </NumberStyle>
      <TitleStyle>{tittel}</TitleStyle>
      <TekstStyle>{description}</TekstStyle>
    </Style>
  );
}

export default Tall;
