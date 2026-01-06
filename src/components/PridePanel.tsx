import React from "react";
import styles from "./PridePanel.module.css";

interface ColoredLineProps {
  color: string;
}

const ColoredLine: React.FC<ColoredLineProps> = ({ color }) => (
  <div className={styles.coloredLine} style={{ "--pride-color": color } as React.CSSProperties} />
);

export const PridePanel = () => (
  <div className={styles.container}>
    <ColoredLine color="#E50000" />
    <ColoredLine color="#FF8D00" />
    <ColoredLine color="#FFEE00" />
    <ColoredLine color="#028121" />
    <ColoredLine color="#004CFF" />
    <ColoredLine color="#770088" />
  </div>
);
