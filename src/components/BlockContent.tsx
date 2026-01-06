import * as React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import styles from "./BlockContent.module.css";
import ArtikkelBilde from "./ArtikkelBilde";
import Code from "./Code/Code";
import FilopplastingLenke from "./FilopplastingLenke";
import Lenke from "./Lenke";

const H2 = ({ children, ...props }: any) => (
  <h2 {...props} className={styles.h2}>
    {children}
  </h2>
);

const H3 = ({ children, ...props }: any) => (
  <h3 {...props} className={styles.h3}>
    {children}
  </h3>
);

const A = ({ children, ...props }: any) => (
  <a {...props} className={styles.link}>
    {children}
  </a>
);

const UL = ({ children, ...props }: any) => (
  <ul {...props} className={styles.bulletList}>
    {children}
  </ul>
);

const OL = ({ children, ...props }: any) => (
  <ol {...props} className={styles.numberedList}>
    {children}
  </ol>
);

const LI = ({ children, ...props }: any) => (
  <li {...props} className={styles.listItem}>
    {children}
  </li>
);

const components: PortableTextComponents = {
  block: {
    h2: H2,
    h3: H3,
    a: A,
  },
  marks: {
    filopplasting: FilopplastingLenke,
    lenke: Lenke,
  },
  types: {
    bilde: ArtikkelBilde,
    code: Code,
  },
  list: {
    bullet: UL,
    number: OL,
  },
  listItem: {
    /* @ts-ignore-line */
    bullet: LI,
  },
};

function BlockContent(props: { blocks: any; className?: string }) {
  const combinedClassName = `${styles.container} ${props.className || ""}`;

  return (
    <div className={combinedClassName}>
      <PortableText value={props.blocks} components={components} />
    </div>
  );
}

export default BlockContent;
