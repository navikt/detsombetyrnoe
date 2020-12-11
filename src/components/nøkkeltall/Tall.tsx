import * as React from "react";
import styled from "styled-components";
import { isNøkkeltallTekst, NøkkeltallListe, NøkkeltallTekst } from "./types";
import { navFrontend } from "../../styles/navFarger";

const Style = styled.li`
  text-align: center;
  > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const NumberStyle = styled.p`
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
}

function Tall(props: Props) {
  const nøkkeltall = props.nøkkeltall;
  const tall = isNøkkeltallTekst(nøkkeltall) ? nøkkeltall.antall : nøkkeltall.liste?.length;
  const tittel = nøkkeltall.title;
  const description = isNøkkeltallTekst(nøkkeltall) ? nøkkeltall.description : nøkkeltall.liste?.join(", ");

  return (
    <Style>
      <NumberStyle>{tall}</NumberStyle>
      <TitleStyle>{tittel}</TitleStyle>
      <TekstStyle>{description}</TekstStyle>
    </Style>
  );
}

export default Tall;
