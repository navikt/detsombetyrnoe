import * as React from "react";
import styled from "styled-components/macro";
import { ArtikkelI } from "./types";
import BildeKollasj from "../BildeKollasj";

const Style = styled.div`
  max-width: min(40rem, 100%);
`;

const Tekst = styled.div`
  margin-bottom: 5vh;
  p {
    margin: 2rem 0;
  }
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
