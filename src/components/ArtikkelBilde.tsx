import * as React from "react";
import { urlFor } from "../lib/sanity";
import { useState } from "react";
import styles from "./ArtikkelBilde.module.css";

export type SanityImageI = { altTekst?: string; caption?: string };

interface Props {
  value: SanityImageI;
}

function ArtikkelBilde(props: Props) {
  const [zoom, setZoom] = useState(false);
  return (
    <figure className={`${styles.styledFigure} ${zoom ? styles.zoom : ""}`} onClick={() => setZoom(!zoom)}>
      <img className={styles.image} src={urlFor(props.value).width(800).url() || ""} alt={props.value.altTekst} />
      <figcaption>{props.value.caption}</figcaption>
    </figure>
  );
}

export default ArtikkelBilde;
