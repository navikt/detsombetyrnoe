import ArrowDown from "../../ikoner/arrowDown";
import NavLogo from "../../ikoner/navlogo";
import GithubrepoLenke from "../GithubrepoLenke";
import Link from "next/link";
import style from "./Header.module.css";
import { useRouter } from "next/navigation";

interface Props {
  overskrift?: string;
  underoverskrift?: string;
  fetUnderskrift?: string;
  bakgrunnsfarge?: string;
  bakgrunnsvideo?: any;
  lysTekst?: boolean;
  visGithubLenke?: boolean;
  navLogoPosition?: "flex-start" | "flex-end";
  tilForsidenLenke?: boolean;
  bildeSrc?: string;
}

export const Header = (props: Props) => {
  const router = useRouter();
  const onClickArrow = () => {
    router.push("#content", { scroll: true });
  };

  return (
    <div className={style.panel}>
      {props.bildeSrc ? (
        <img className={style.bgPicture} height="110vh" width="100%" src={props.bildeSrc} />
      ) : (
        <video className={style.video} autoPlay muted loop>
          <source
            src="https://cdn.sanity.io/files/c9hptfq7/production/fe9db01ee9c2c904d6d528e4a243c458d8fed5c6.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.sanity.io/files/c9hptfq7/production/ca1d96f725e9883356a31f11707eb77cd2db3e2d.webm"
            type="video/webm"
          />
        </video>
      )}
      <div className={style.overlay}>
        <header className={style.header}>
          <div className={`${style.topplinje} ${props.navLogoPosition === "flex-start" ? style.left : style.right}`}>
            <a href="https://www.nav.no/" aria-label="Lenke til NAV">
              <NavLogo />
            </a>
          </div>
          {props.visGithubLenke && <GithubrepoLenke />}
          <h1>{props.overskrift}</h1>
          <p>{props.underoverskrift}</p>
          {props.fetUnderskrift && (
            <p>
              <strong>{props.fetUnderskrift}</strong>
            </p>
          )}
          <button className={style.arrowButton} tabIndex={-1} onClick={onClickArrow} aria-hidden>
            <ArrowDown />
          </button>
          {props.tilForsidenLenke && (
            <div className={style.bunnlinje}>
              <Link href="/">Til hovedsiden</Link>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};
