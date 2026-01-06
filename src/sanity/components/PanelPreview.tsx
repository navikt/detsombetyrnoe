import React from "react";
import withErrorBoundary from "../../components/withErrorBoundary";
import { IconType } from "react-icons";
import styles from "./PanelPreview.module.css";

interface Props {
  value: {
    type: string;
    lysTekst: boolean;
    lysBakgrunn: boolean;
    tittel: string;
  };
  icon?: IconType;
}

function PanelPreview(props: Props) {
  if (!props.value) {
    return null;
  }

  const tittel = props.value.tittel;
  return (
    <div
      className={styles.style}
      style={{
        backgroundColor: props.value.lysBakgrunn ? "#e9e7e7" : "#32414f",
        color: props.value.lysTekst ? "#FFF" : "#333",
      }}
    >
      {props.icon && <props.icon />}{" "}
      <span>
        {props.value.type}
        {tittel && `: ${tittel}`}
      </span>
    </div>
  );
}

export default withErrorBoundary(PanelPreview, "PanelPreview");
