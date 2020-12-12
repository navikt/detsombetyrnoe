import * as React from "react";
import { NøkkeltallListe, NøkkeltallTekst } from "./types";
import Panel from "../Panel";
import Tall from "./Tall";
import styled from "styled-components";
import { useRef } from "react";
import useInViewport from "../../utils/useInViewport";

export interface NøkkeltallData {
  nokkeltall?: (NøkkeltallTekst | NøkkeltallListe)[];
}

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 15rem));
  @media (min-width: 80rem) {
    grid-template-columns: repeat(4, 15rem);
  }
  grid-gap: 4rem;
`;

export default function Nøkkeltall(props: NøkkeltallData) {
  const ref = useRef<HTMLUListElement>(null);
  const inViewport = useInViewport(ref, 200);

  return (
    <Panel backgroundColor={"white"} fontColor="black" id="nokkeltall">
      <StyledUl ref={ref}>
        {props.nokkeltall?.map((tall, i) => (
          <Tall key={tall._key} nøkkeltall={tall} inViewport={inViewport} />
        ))}
      </StyledUl>
    </Panel>
  );
}
