"use client";

import { useEffect } from "react";
import { loggError } from "../../utils/logger";
import styles from "./error-pages.module.css";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    loggError(error);
  }, [error]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Beklager, noe gikk galt 🤷‍♀️</h1>
        <p className={styles.message}>Det skjedde en uventet feil. Vennligst prøv igjen.</p>
        <button onClick={reset} className={styles.primaryButton}>
          Prøv igjen
        </button>
      </div>
    </main>
  );
}
