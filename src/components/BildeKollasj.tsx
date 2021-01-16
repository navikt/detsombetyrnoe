import * as React from "react";
import Parallax from "./Parallax";
import { urlFor } from "../lib/sanity";
import styled from "styled-components/macro";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";

const TwoImageWrapper = styled.div`
  position: relative;
  height: 40vw;
  img {
    height: 30vw;
    width: 40vw;
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

const getUrl = (bilde: Bilde) => urlFor(bilde).width(500).url() || "";

function BildeKollasj(props: Props) {
  if (props.bilder.length === 2) {
    return (
      <TwoImageWrapper>
        <Parallax speedY={-2} speedX={2} style={{ position: "absolute", bottom: 0, left: 0 }}>
          <img src={getUrl(props.bilder[0])} />
        </Parallax>
        <Parallax speedY={2} speedX={-2} style={{ position: "absolute", top: 0, right: 0 }}>
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
