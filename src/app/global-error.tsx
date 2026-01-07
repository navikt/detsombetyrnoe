"use client";

import { useEffect } from "react";
import { loggError } from "../utils/logger";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    loggError(error);
  }, [error]);

  return (
    <html lang="no">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            backgroundColor: "#005B82",
            color: "white",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          <div style={{ maxWidth: "600px", textAlign: "center" }}>
            <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Beklager, noe gikk galt 🤷‍♀️</h1>
            <p style={{ marginBottom: "2rem", opacity: "0.9" }}>
              Det skjedde en kritisk feil. Vennligst last siden på nytt.
            </p>
            <button
              onClick={reset}
              style={{
                backgroundColor: "white",
                color: "#005B82",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Last siden på nytt
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
