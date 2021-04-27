import * as React from "react";
import Parallax from "./Parallax";
import { urlFor } from "../lib/sanity";
import styled from "styled-components/macro";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { ArtikkelI } from "./artikkel/types";
import Video from "./Video";
import { HTMLAttributes } from "react";

const TwoImageWrapper = styled.div`
  position: relative;
  img {
    height: min(40vw, 30rem);
    width: auto;
    display: block;
  }
`;

const NormalWrapper = styled.div`
  img {
    display: block;
    margin: 1rem 0;
    width: 100%;
  }
`;

type MediaI = ArtikkelI["bilder"][0];

interface Props {
  bilder: MediaI[];
}

function BildeKollasj(props: Props) {
  if (props.bilder.length === 2) {
    return (
      <TwoImageWrapper>
        <Parallax speedY={-2} speedX={2} style={{ paddingLeft: "10vmin" }}>
          <Media media={props.bilder[0]} style={{ marginLeft: "auto" }} />
        </Parallax>
        <Parallax speedY={2} speedX={-2} style={{ paddingRight: "10vmin", marginTop: "-5vmin" }}>
          <Media media={props.bilder[1]} />
        </Parallax>
      </TwoImageWrapper>
    );
  }

  return (
    <NormalWrapper>
      {props.bilder.map((bilde) => (
        <Media media={bilde} key={bilde._key} />
      ))}
    </NormalWrapper>
  );
}

function Media(props: { media: MediaI } & HTMLAttributes<HTMLElement>) {
  const { media, ...rest } = props;
  switch (media._type) {
    case "bilde":
      return <img {...rest} src={urlFor(media).width(1080).format("jpg").quality(80).url() || ""} />;
    case "video":
      return <Video title={media.title} url={media.url} />;
    default:
      return null;
  }
}

export default BildeKollasj;
