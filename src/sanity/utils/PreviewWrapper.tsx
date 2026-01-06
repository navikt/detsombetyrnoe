import React from "react";
import styles from "./PreviewWrapper.module.css";

export function WebPreviewWrapper(props: { url: string }) {
  return (
    <div className={styles.style}>
      <iframe src={props.url} frameBorder={0} />
    </div>
  );
}
