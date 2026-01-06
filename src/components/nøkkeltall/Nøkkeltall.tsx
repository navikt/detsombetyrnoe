import * as React from "react";
import { NøkkeltallListe, NøkkeltallTekst } from "./types";
import Panel from "../Panel";
import Tall from "./Tall";
import { useRef } from "react";
import useInViewport from "../../utils/useInViewport";
import styles from "./Nøkkeltall.module.css";

type NøkkeltallEntry = NøkkeltallTekst | NøkkeltallListe;

export interface NøkkeltallData {
  _type: "nokkeltall";
  nokkeltall?: NøkkeltallEntry[];
  className?: string;
}

export default function Nøkkeltall(props: NøkkeltallData) {
  const ref = useRef<HTMLUListElement>(null);
  const inViewport = useInViewport(ref, 200);

  return (
    <ul ref={ref} className={`${styles.list} ${props.className || ""}`}>
      {props.nokkeltall?.map((tall, i) => (
        <Tall key={tall._key} nøkkeltall={tall} inViewport={inViewport} />
      ))}
    </ul>
  );
}
