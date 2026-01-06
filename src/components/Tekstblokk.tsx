import * as React from "react";
import { forwardRef, RefObject } from "react";
import styles from "./Tekstblokk.module.css";
import BlockContent from "./BlockContent";
import { ArtikkelI } from "./artikkel/types";
import Link from "next/link";

interface Props {
  lysBakgrunn?: boolean;
  lysTekst?: boolean;
  overskrift: string;
  tekst: any;
  artikkel?: ArtikkelI;
  className?: string;
  id?: string;
  forwardRef?: RefObject<HTMLDivElement>;
}

const Tekstblokk = (props: Props) => {
  const backgroundColor = props.lysBakgrunn ? "#e9e7e7" : "#32414f";
  const textClass = props.lysTekst ? styles.lightText : styles.darkText;
  const combinedClassName = `${styles.container} ${textClass} ${props.className || ""}`;

  return (
    <div
      className={combinedClassName}
      style={{ "--custom-bg-color": backgroundColor } as React.CSSProperties}
      id={props.id}
      ref={props.forwardRef}
    >
      <div className={styles.content}>
        <h2>{props.overskrift}</h2>
        <BlockContent blocks={props.tekst} className={styles.styledBlockContent} />
        {props.artikkel && <Link href={`/${props.artikkel.slug.current}`}>{props.artikkel.lesMerTekst}</Link>}
      </div>
    </div>
  );
};

export default Tekstblokk;
