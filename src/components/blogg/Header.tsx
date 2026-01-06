import * as React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

function Header(props: { fontSize: string; h1?: boolean; className?: string }) {
  return (
    <Link href="/blogg" passHref legacyBehavior>
      <a className={`${styles.style} ${props.className || ""}`} style={{ fontSize: props.fontSize }}>
        <div className={styles.heading} role={props.h1 ? "heading" : undefined}>
          <span>NAV IT</span>
          <span className="blogg">Blogg.</span>
        </div>
      </a>
    </Link>
  );
}

export default Header;
