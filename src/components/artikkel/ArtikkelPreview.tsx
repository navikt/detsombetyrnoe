import * as React from "react";
import styled from "styled-components/macro";
import { ArtikkelI } from "./types";
import BildeKollasj from "../BildeKollasj";
import { cssVars } from "../../styles/cssVars";

const Style = styled.div`
  --content-max-width: min(40rem, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tekst = styled.div`
  margin-bottom: 5vh;
  p {
    margin: 2rem 0;
  }
  max-width: var(--content-max-width);
`;

function ArtikkelPreview(props: ArtikkelI) {
  return (
    <Style>
      <Tekst>
        <h2>{props.tittel}</h2>
        <p>{props.ingress}</p>
        <a href={props.slug.current}>{props.lesMerTekst}</a>
      </Tekst>
      <BildeKollasj media={props.bilder} />
    </Style>
  );
}

export default ArtikkelPreview;
