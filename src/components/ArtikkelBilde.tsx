import * as React from "react";
import styled from "styled-components/macro";
import { urlFor } from "../lib/sanity";
import { SanityImageI } from "../pages/blogg/[slug]";
import { useState } from "react";

const StyledFigure = styled.figure<{ zoom: boolean }>`
  margin: 3rem auto;
  figcaption {
    opacity: 0.9;
    font-size: 0.8em;
  }
  max-width: ${(props) => (props.zoom ? "100%" : "35rem")};
  transition: 0.3s;
`;

const Image = styled.img`
  width: 100%;
`;

interface Props {
  node: SanityImageI;
}

function ArtikkelBilde(props: Props) {
  const [zoom, setZoom] = useState(false);
  return (
    <StyledFigure onClick={() => setZoom(!zoom)} zoom={zoom}>
      <Image src={urlFor(props.node).width(800).url() || ""} alt={props.node.altTekst} />
      <figcaption>{props.node.caption}</figcaption>
    </StyledFigure>
  );
}

export default ArtikkelBilde;
