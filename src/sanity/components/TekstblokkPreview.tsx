import * as React from "react";
import styles from "./TekstblokkPreview.module.css";

interface Props {
  value: {
    bakgrunnsfarge: string;
    overskrift: string;
  };
  icon?: React.ReactElement;
}

function PanelPreview(props: Props) {
  if (!props.value) {
    return null;
  }

  const tittel = props.value.overskrift;
  return (
    <div className={styles.style} style={{ backgroundColor: props.value.bakgrunnsfarge }}>
      Tekstblokk: <span>{tittel && `: ${tittel}`}</span>
    </div>
  );
}

export default PanelPreview;
