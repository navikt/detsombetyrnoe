"use client";
import * as React from "react";
import { ArtikkelI } from "./types";
import Error from "next/error";
import BlockContent from "../BlockContent";
import MainMedia from "./MainMedia";
import { ArtikkelLayout } from "./ArtkkelLayout";
import styles from "./Artikkel.module.css";

interface Props {
  data: ArtikkelI;
}

function Artikkel(props: Props) {
  const artikkel = props.data;

  if (!artikkel) {
    return <Error statusCode={404} />;
  }

  const coverMedia = artikkel.bilder?.[0];

  return (
    <ArtikkelLayout
      tittel={artikkel.tittel}
      undertittel={artikkel.undertittel}
      ingress={artikkel.ingress}
      slug={artikkel.slug.current}
    >
      <MainMedia {...coverMedia} />
      <BlockContent className={styles.styledBlockContent} blocks={artikkel.innhold} />
    </ArtikkelLayout>
  );
}

export default Artikkel;
