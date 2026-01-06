import * as React from "react";
import styles from "./Tall.module.css";
import { isNøkkeltallTekst, NøkkeltallListe, NøkkeltallTekst } from "./types";
import { useRef } from "react";

interface Props {
  nøkkeltall: NøkkeltallListe | NøkkeltallTekst;
  inViewport: boolean;
}

function Tall(props: Props) {
  const nøkkeltall = props.nøkkeltall;
  const tall = isNøkkeltallTekst(nøkkeltall) ? nøkkeltall.antall : nøkkeltall.liste?.length;
  const tittel = nøkkeltall.title;
  const description = isNøkkeltallTekst(nøkkeltall) ? nøkkeltall.description : nøkkeltall.liste?.join(", ");

  const ref = useRef<HTMLLIElement>(null);
  const rect = ref.current?.getBoundingClientRect();
  const delay = rect ? (rect.left / 3 + rect.top / 4) * 0.001 : 0;

  const numberStyle = {
    "--animation-delay": `${delay}s`,
    "--animation-play-state": props.inViewport ? "running" : "paused",
  } as React.CSSProperties;

  return (
    <li ref={ref} className={styles.container}>
      <p className={styles.number} style={numberStyle}>
        {tall}
      </p>
      <p className={styles.title}>{tittel}</p>
      <p className={styles.description}>{description}</p>
    </li>
  );
}

export default Tall;
