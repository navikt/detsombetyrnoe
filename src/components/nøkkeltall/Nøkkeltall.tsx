import * as React from "react";
import { NøkkeltallListe, NøkkeltallTekst } from "./types";
import Panel from "../Panel";
import Tall from "./Tall";
import styled from "styled-components";
import { useRef } from "react";
import useInViewport from "../../utils/useInViewport";

type NøkkeltallEntry = NøkkeltallTekst | NøkkeltallListe;

export interface NøkkeltallData {
  _type: "nokkeltall";
  nokkeltall?: NøkkeltallEntry[];
}

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 15rem));
  @media (min-width: 100em) {
    grid-template-columns: repeat(4, 15rem);
  }
  grid-gap: 4rem;

  @media (max-width: 768px) {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }
`;

export default function Nøkkeltall(props: NøkkeltallData) {
  const ref = useRef<HTMLUListElement>(null);
  const inViewport = useInViewport(ref, 200);

  return (
    <StyledUl ref={ref}>
      {props.nokkeltall?.map((tall, i) => (
        <Tall key={tall._key} nøkkeltall={tall} inViewport={inViewport} />
      ))}
    </StyledUl>
  );
}
