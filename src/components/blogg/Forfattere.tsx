import * as React from "react";
import { urlFor } from "../../lib/sanity";
import { Forfatter as ForfatterInterface } from "src/lib/services/sanity/model/forfatter/forfatterQuery";
import Link from "next/link";
import styles from "./Forfattere.module.css";

function Forfatter(props: { forfatter: ForfatterInterface; lenke?: boolean }) {
  const content = (
    <div className={styles.forfatterStyle}>
      <img
        className={styles.forfatterImage}
        src={urlFor(props.forfatter.mainImage).height(100).width(100).url() || ""}
        alt=""
      />
      <p>{props.forfatter.navn}</p>
    </div>
  );

  if (props.lenke) {
    return (
      <Link href={`/forfatter/${props.forfatter.slug}`} legacyBehavior>
        <a className={styles.styledA}>{content}</a>
      </Link>
    );
  }

  return content;
}

function Forfattere(props: { forfattere?: ForfatterInterface[]; className?: string; lenkeTilForfatterside?: boolean }) {
  return (
    <div className={props.className}>
      {props.forfattere?.map((forfatter) => (
        <Forfatter key={forfatter.navn} forfatter={forfatter} lenke={props.lenkeTilForfatterside} />
      ))}
    </div>
  );
}

export default Forfattere;
