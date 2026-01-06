import { ReactNode } from "react";
import styles from "./VisuallyHidden.module.css";

interface Props {
  children: ReactNode;
}

const VisuallyHidden = ({ children }: Props) => <div className={styles.visuallyHidden}>{children}</div>;

export default VisuallyHidden;
