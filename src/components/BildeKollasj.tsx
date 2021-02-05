import * as React from "react";
import Parallax from "./Parallax";
import { urlFor } from "../lib/sanity";
import styled from "styled-components/macro";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";

const TwoImageWrapper = styled.div`
  position: relative;
  img {
    height: min(40vw, 30rem);
    width: auto;
  }
`;

const NormalWrapper = styled.div`
  img {
    display: block;
    margin: 1rem 0;
    width: 100%;
  }
`;

export interface Bilde extends SanityImageObject {
  altTekst: string;
  _key: string;
}

interface Props {
  bilder: Bilde[];
}

const getUrl = (bilde: Bilde) => urlFor(bilde).width(800).format("jpg").url() || "";

function BildeKollasj(props: Props) {
  if (props.bilder.length === 2) {
    return (
      <TwoImageWrapper>
        <Parallax speedY={-2} speedX={2} style={{ paddingLeft: "10vmin" }}>
          <img src={getUrl(props.bilder[0])} />
        </Parallax>
        <Parallax speedY={2} speedX={-2} style={{ paddingRight: "10vmin", marginTop: "-5vmin" }}>
          <img src={getUrl(props.bilder[1])} />
        </Parallax>
      </TwoImageWrapper>
    );
  }

  return (
    <NormalWrapper>
      {props.bilder.map((bilde) => (
        <img src={getUrl(bilde)} key={bilde._key} />
      ))}
    </NormalWrapper>
  );
}

export default BildeKollasj;
