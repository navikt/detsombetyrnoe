import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import ArrowDown from "../../ikoner/arrowDown";
import NavLogo from "../../ikoner/navlogo";
import Panel from "../Panel";
import GithubrepoLenke from "../GithubrepoLenke";
import Link from "next/link";

const fadeIn = keyframes`
from {
  opacity: 0;
}
`;

const StyledPanel = styled(Panel)`
  padding: 0;
`;

const Video = styled.video`
  object-fit: fill;

  height: 110vh;
  position: absolute;
  z-index: 0;
`;

const Style = styled.header`
  animation: ${fadeIn} 2s 0.5s backwards;
  text-align: center;
  max-width: 45rem;
  padding: 20vmin 5vmin;
  margin: 0 auto;
  h1 {
    font-size: clamp(3rem, 16vmin, 4rem);

    font-weight: 700;
    line-height: 95%;
    margin-bottom: 2rem;
  }
  p {
    font-size: calc(2vmin + 1.5rem);
    line-height: 138%;
    margin-bottom: 1rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
`;

const StyledToppLinje = styled.div<{ navLogoPosition: "flex-start" | "flex-end" }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: ${(props) => props.navLogoPosition};
  svg {
    width: 4rem;
    fill: white;
  }
`;

const StyledBunnLinje = styled.div`
  position: absolute;
  bottom: 10vh;
  left: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: "flext-start";
  svg {
    width: 4rem;
    fill: white;
  }
`;

const StyledDetSomBetyrNoe = styled.div`
  font-weight: 900;
  text-transform: uppercase;
  max-width: 6em;
  text-align: left;
  line-height: 105%;
  font-size: 1rem;
`;

const ArrowButton = styled.button`
  margin-top: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
`;

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
}

export const Header = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const onClickArrow = () => {
    const top = ref.current?.getBoundingClientRect().height;
    return window.scrollTo({ top: top, behavior: "smooth" });
  };

  return (
    <StyledPanel forwardRef={ref} backgroundColor={props.bakgrunnsfarge} lysTekst={props.lysTekst}>
      <Video autoPlay muted loop>
        <source
          src="https://cdn.sanity.io/files/c9hptfq7/production/fe9db01ee9c2c904d6d528e4a243c458d8fed5c6.mp4"
          type="video/mp4"
        />
      </Video>
      <Overlay>
        <Style>
          <StyledToppLinje navLogoPosition={props.navLogoPosition ?? "flex-end"}>
            <a href="https://www.nav.no/" aria-label="Lenke til NAV">
              <NavLogo />
            </a>
          </StyledToppLinje>
          {props.visGithubLenke && <GithubrepoLenke />}
          <h1>{props.overskrift}</h1>
          <p>{props.underoverskrift}</p>
          {props.fetUnderskrift && (
            <p>
              <strong>{props.fetUnderskrift}</strong>
            </p>
          )}
          <ArrowButton tabIndex={-1} onClick={onClickArrow} aria-hidden>
            <ArrowDown />
          </ArrowButton>
          {props.tilForsidenLenke && (
            <StyledBunnLinje>
              <Link href="/">
                <a>Til hovedsiden</a>
              </Link>
            </StyledBunnLinje>
          )}
        </Style>
      </Overlay>
    </StyledPanel>
  );
};
