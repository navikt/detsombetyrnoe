"use client";
import React from "react";
import Header from "./Header";
import Forfattere from "./Forfattere";
import { urlFor } from "../../lib/sanity";
import BlockContent from "../BlockContent";
import Head from "next/head";
import { formatterDato } from "../../utils/formatterDato";
import { useTracking } from "../../contexts/tracking-context";
import { useMount } from "react-use";
import { BlogpostData } from "src/lib/services/sanity/model/blogg/bloggQuery";
import styles from "./BloggPost.module.css";

const Bloggside = (props: BlogpostData) => {
  const { logEvent } = useTracking();

  useMount(() => {
    logEvent("Bloggpost - pageview", {
      tittel: props.tittel,
      forfatter: props.forfattere?.map((it) => it.navn),
      slug: props.slug,
    });
  });

  return (
    <div className={styles.style} lang={props.language}>
      <Head>
        <title>{props.tittel}</title>
      </Head>
      <div className={styles.content}>
        <Header fontSize=".75rem" />
        <h1>{props.tittel}</h1>
        <Forfattere className={styles.styledForfattere} forfattere={props.forfattere} lenkeTilForfatterside={true} />
        {props.mainImage && (
          <img
            className={styles.mainImage}
            src={urlFor(props.mainImage).width(1080).height(540).bg("fff").format("jpg").url() || ""}
            alt={props.mainImage?.altTekst}
          />
        )}
        <div className={styles.publishedDate}>{formatterDato(props._createdAt)}</div>
        <BlockContent className={styles.styledBlockContent} blocks={props.body} />
      </div>
    </div>
  );
};

export default Bloggside;
