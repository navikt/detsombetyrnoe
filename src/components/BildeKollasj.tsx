import * as React from "react";
import Parallax from "./Parallax";
import { urlFor } from "../lib/sanity";
import { ArtikkelI } from "./artikkel/types";
import Video from "./Video";
import { HTMLAttributes } from "react";
import styles from "./BildeKollasj.module.css";

type MediaI = ArtikkelI["bilder"][0];

interface Props {
  media?: MediaI[];
}

function BildeKollasj(props: Props) {
  if (!props.media) {
    return null;
  }

  if (props.media.length === 2) {
    return (
      <div className={styles.twoImageWrapper}>
        <Parallax speedY={-2} speedX={2} style={{ paddingLeft: "10vmin" }}>
          <Media media={props.media[0]} style={{ marginLeft: "auto" }} />
        </Parallax>
        <Parallax speedY={2} speedX={-2} style={{ paddingRight: "10vmin", marginTop: "-5vmin" }}>
          <Media media={props.media[1]} />
        </Parallax>
      </div>
    );
  }

  return (
    <div className={styles.normalWrapper}>
      {props.media.map((bilde) => (
        <Media media={bilde} key={bilde._key} />
      ))}
    </div>
  );
}

function Media(props: { media: MediaI } & HTMLAttributes<HTMLElement>) {
  const { media, ...rest } = props;
  switch (media._type) {
    case "bilde":
      return (
        <img {...rest} alt={media.altTekst} src={urlFor(media).width(1080).format("jpg").quality(80).url() || ""} />
      );
    case "video":
      return <Video title={media.title} url={media.url} />;
    default:
      return null;
  }
}

export default BildeKollasj;
