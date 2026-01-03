import Link from "next/link";
import style from "./Footer.module.css";

export function Footer({ isSikkerhet }: { isSikkerhet?: boolean }) {
  return (
    <footer className={style.footer}>
      <Link href={isSikkerhet ? "/jobb-med-sikkerhet" : "/"}>Tilbake til forsiden</Link>
    </footer>
  );
}
