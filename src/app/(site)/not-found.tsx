"use client";

import Link from "next/link";
import styles from "./error-pages.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Siden finnes ikke 🔍</h1>
        <p className={styles.message}>
          Beklager, vi kunne ikke finne siden du leter etter. Den kan ha blitt flyttet, slettet eller du skrev inn feil
          adresse.
        </p>

        <div className={styles.buttonContainer}>
          <Link href="/" className={styles.primaryButton}>
            Gå til forsiden
          </Link>

          <button onClick={() => window.history.back()} type="button" className={styles.secondaryButton}>
            Gå tilbake
          </button>
        </div>
      </div>
    </main>
  );
}
