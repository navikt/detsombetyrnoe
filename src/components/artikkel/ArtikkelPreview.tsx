import * as React from "react";
import styled from "styled-components/macro";
import { ArtikkelI } from "./types";
import BildeKollasj from "../BildeKollasj";

const Style = styled.div`
  padding: 0 10% 0 15%;
`;

const Tekst = styled.div`
  padding-right: 20%;
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
      <BildeKollasj bilder={props.bilder} />
    </Style>
  );
}

export default ArtikkelPreview;
