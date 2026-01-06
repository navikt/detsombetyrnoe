import * as React from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import { useMount } from "react-use";
import { useRef } from "react";
import styles from "./Code.module.css";

interface Props {
  value: {
    code: string;
    highlightedLines: number[];
    language: string;
    _key: string;
    _type: "code";
  };
}

function Code(props: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useMount(() => Prism.highlightElement(ref.current as Element));

  const language = props.value.language;

  return (
    <div className={styles.style}>
      <div className={styles.languageStyle}>{language}</div>
      <pre className={styles.styledPre}>
        <code ref={ref} className={"language-" + language}>
          {props.value.code}
        </code>
      </pre>
    </div>
  );
}

export default Code;
