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
  grid-gap: 4rem;

  @media (min-width: 100em) {
    grid-template-columns: repeat(4, 15rem);
  }

  @media (max-width: 100em) and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }

  @media (max-width: 400px) {
    word-break: break-word;
    hyphens: auto;
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
