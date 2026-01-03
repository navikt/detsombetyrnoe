import NavLogo from "../../ikoner/navlogo";
import Link from "next/link";
import style from "./Header.module.css";

export function Header({ isSikkerhet }: { isSikkerhet?: boolean }) {
  return (
    <header className={style.header}>
      <Link href={isSikkerhet ? "/jobb-med-sikkerhet" : "/"}>Tilbake til forsiden</Link>
      <a href="https://www.nav.no/" aria-label="Lenke til NAV">
        <NavLogo />
      </a>
    </header>
  );
}
