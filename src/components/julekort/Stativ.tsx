import * as React from "react";
import styled, { css } from "styled-components/macro";
import { navFrontend } from "../../styles/navFarger";
import { keyframes } from "styled-components/macro";
import { delay } from "./animasjoner";
import Sokk from "./ikoner/Sokk";
import { useState } from "react";
import { SiTypescript } from "react-icons/all";

const rotateIn = keyframes`
from {
  transform: rotateY(90deg);
}
`;

const Style = styled.div`
  animation: ${rotateIn} 0.5s backwards ${delay + 2.5}s;
  position: absolute;
  bottom: 1em;
  font-size: 2.5vmin;
  left: 48vw;
  width: 8em;
  height: 4em;
  border: 0.15em solid #333;
  border-top: none;
  border-bottom: none;
`;

const Tråd = styled.div`
  position: absolute;
  bottom: 3.5em;
  left: 0;
  right: 0;
  border-top: 0.1em black solid;
`;

const dropDown = keyframes`
  from {
    transform: rotateX(90deg);
  }
  70% {
    transform: rotateX(-20deg);
  }
  80% {
    transform: rotateX(15deg);
  }
  95% {
    transform: rotateX(-10deg);
  }
`;

type SokkProps = { offset: number; delay: number; mirror?: boolean; onClick?: () => void; pointer?: boolean };

const SokkStyle = styled.div<SokkProps>`
  position: absolute;
  bottom: 1.4em;
  left: ${(props) => props.offset}em;
  ${(props) =>
    props.mirror &&
    css`
      transform: rotateY(180deg);
    `};
  svg {
    animation: ${dropDown} 0.5s ${(props) => props.delay}s both;
    transform-origin: top;
    height: 2em;
    fill: ${navFrontend.navRod};
    ${(props) =>
      props.pointer &&
      css`
        cursor: pointer;
      `};
  }
`;

function SokkKomponent(props: SokkProps) {
  return (
    <SokkStyle {...props}>
      <Sokk />
    </SokkStyle>
  );
}

function Stativ() {
  const [easterEgg, setEasterEgg] = useState(false);

  return (
    <Style>
      <Tråd />
      <SokkKomponent offset={3.2} onClick={() => setEasterEgg(true)} delay={delay + 3} pointer={!easterEgg} />
      {easterEgg && (
        <>
          <SokkKomponent offset={0.1} delay={0} />
          <SokkKomponent offset={1.6} delay={0.4} mirror={true} />
          <SokkKomponent offset={4.5} delay={0.3} />
          <SokkKomponent offset={6} delay={0.8} mirror={true} />
        </>
      )}
    </Style>
  );
}

export default Stativ;
