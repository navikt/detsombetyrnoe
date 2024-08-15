import Link from "next/link";
import React from "react";
import style from "./Footer.module.css";

export const Footer = (props: { tittel: string; slug: string; backgroundColor?: string; lysTekst?: boolean }) => {
  return (
    <footer className={style.footer}>
      <Link href={props.slug} className={style.lysTekst}>
        {props.tittel}
      </Link>
      <span aria-hidden={true}>|</span>
      <a
        className={style.lysTekst}
        href="https://uustatus.no/nb/erklaringer/publisert/4e19bda2-a2b9-4a4f-864a-cf7fcbf5ea06"
      >
        Tilgjengelighets&shy;erklæring
      </a>
    </footer>
  );
};
