import * as React from "react";
import VisuallyHidden from "./VisuallyHidden";
import styles from "./Video.module.css";

interface Props {
  title: string;
  url: string;
}

function Video(props: Props) {
  return (
    <figure className={styles.container}>
      <iframe className={styles.iframe} title={props.title} src={props.url} allowFullScreen frameBorder="0"></iframe>
      <VisuallyHidden>
        <figcaption>{props.title}</figcaption>
      </VisuallyHidden>
    </figure>
  );
}

export default Video;
