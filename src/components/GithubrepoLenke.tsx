import * as React from "react";
import GithubIkon from "../ikoner/githubIkon";
import styles from "./GithubrepoLenke.module.css";

function GithubrepoLenke() {
  return (
    <a className={styles.style} href="https://github.com/navikt/detsombetyrnoe">
      Kode
      <GithubIkon />
    </a>
  );
}

export default GithubrepoLenke;
