import React, { useRef } from "react";
import styled, { keyframes } from "styled-components/macro";
import ArrowDown from "../../ikoner/arrowDown";
import NavLogo from "../../ikoner/navlogo";
import Panel from "../Panel";
import GithubrepoLenke from "../GithubrepoLenke";
import NavLogoBonanza from "./NavLogoBonanza";

const fadeIn = keyframes`
from {
  opacity: 0;
}
`;

const Style = styled.header`
  animation: ${fadeIn} 1s 0.3s backwards;
  text-align: center;
  max-width: 45rem;
  h1 {
    font-weight: 700;
    font-size: 14vmin;
    line-height: 95%;
    margin-bottom: 2rem;
  }
  p {
    font-size: calc(2vmin + 0.5rem);
    line-height: 138%;
    margin-bottom: 1rem;
  }
`;

const StyledToppLinje = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  svg {
    width: 4rem;
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
  bakgrunnsfarge?: string;
  lysTekst?: boolean;
}

export const Header = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const onClickArrow = () => {
    const top = ref.current?.getBoundingClientRect().height;
    return window.scrollTo({ top: top, behavior: "smooth" });
  };

  return (
    <Panel forwardRef={ref} backgroundColor={props.bakgrunnsfarge} lysTekst={props.lysTekst}>
      <NavLogoBonanza />
      <Style>
        <StyledToppLinje>
          {/*
          <StyledDetSomBetyrNoe>Det som betyr noe</StyledDetSomBetyrNoe>
        */}
          <a href="https://www.nav.no/" aria-label="Lenke til NAV">
            <NavLogo />
          </a>
        </StyledToppLinje>
        <GithubrepoLenke />
        <h1>{props.overskrift}</h1>
        <p>{props.underoverskrift}</p>
        <ArrowButton tabIndex={-1} onClick={onClickArrow} aria-hidden>
          <ArrowDown />
        </ArrowButton>
      </Style>
    </Panel>
  );
};
