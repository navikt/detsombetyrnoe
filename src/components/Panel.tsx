import { ReactNode, RefObject } from "react";
import styles from "./Panel.module.css";

interface Props {
  lysBakgrunn?: boolean;
  lysTekst?: boolean;
  children: ReactNode;
  className?: string;
  id?: string;
  forwardRef?: RefObject<HTMLDivElement>;
}

const Panel = (props: Props) => {
  const backgroundColor = props.lysBakgrunn ? "#e9e7e7" : "#32414f";
  const textClass = props.lysTekst ? styles.lightText : styles.darkText;

  return (
    <div
      className={`${styles.panel} ${textClass} ${props.className || ""}`}
      style={{ "--background-color": backgroundColor } as React.CSSProperties}
      id={props.id}
      ref={props.forwardRef}
    >
      {props.children}
    </div>
  );
};

export default Panel;
