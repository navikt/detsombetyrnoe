import * as React from "react";
import styled, { css } from "styled-components";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

const StyledFigure = styled.figure<{ zoom: boolean }>`
  figcaption {
    opacity: 0.8;
    font-size: 0.8em;
    font-style: italic;
  }
  && {
    margin: 3rem auto;
    max-width: ${(props) => (props.zoom ? "100%" : css`calc(var(--content-max-width) * 0.7)`)};
    transition: 0.3s;
  }
`;

const Image = styled.img`
  width: 100%;
`;

export type SanityImageI = { altTekst?: string; caption?: string };

interface Props {
  value: SanityImageI;
}

function ArtikkelBilde(props: Props) {
  const [zoom, setZoom] = useState(false);
  return (
    <StyledFigure onClick={() => setZoom(!zoom)} zoom={zoom}>
      <Image src={urlFor(props.value).width(800).url() || ""} alt={props.value.altTekst} />
      <figcaption>{props.value.caption}</figcaption>
    </StyledFigure>
  );
}

export default ArtikkelBilde;
