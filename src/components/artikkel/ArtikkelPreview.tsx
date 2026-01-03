import { ArtikkelI } from "./types";
import BildeKollasj from "../BildeKollasj";
import style from "./ArtikkelPreview.module.css";
import Link from "next/link";

export function ArtikkelPreview(props: ArtikkelI) {
  return (
    <div className={style.artikkelPreview}>
      <div className={style.artikkelPreviewTekst}>
        <h2>{props.tittel}</h2>
        {props.undertittel && <h3>{props.undertittel}</h3>}
        <p>{props.ingress}</p>
        <Link href={props.slug.current}>{props.lesMerTekst}</Link>
      </div>
      <BildeKollasj media={props.bilder} />
    </div>
  );
}
