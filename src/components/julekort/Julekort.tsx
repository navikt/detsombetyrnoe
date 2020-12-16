import * as React from "react";
import styled, { css, keyframes } from "styled-components/macro";
import Bondegård from "./ikoner/Bondegård";
import Fjell from "./ikoner/Fjell";
import Sky from "./ikoner/Sky";
import LitenStjerne from "./ikoner/LitenStjerne";
import Måne from "./ikoner/Måne";
import Juletre from "./Juletre";
import { animasjoner, delay } from "./animasjoner";
import Snø from "./Snø";
import { useEffect, useState } from "react";
import Head from "next/head";
import { detect } from "detect-browser";
import withErrorBoundary from "../withErrorBoundary";

const Style = styled.div<{ height: number }>`
  position: relative;
  transition: height 0.2s;
  height: ${(props) => (props.height ? `${props.height}px` : "100vh")};
  overflow: hidden;
  background: linear-gradient(#103, #108);
  color: palegoldenrod;
`;

const getStyle = (brightness: number, bottom = 0) => css`
  position: absolute;
  filter: brightness(${brightness}%);
  bottom: ${bottom}%;
`;

const StyledBondegård = styled(Bondegård)`
  ${getStyle(45)};
  width: 80%;
  left: -5%;
  animation: ${animasjoner.vippOpp} 1s backwards;
  animation-delay: ${0.5 + delay}s;
  transform-origin: bottom;
`;

const StyledFjell = styled(Fjell)`
  ${getStyle(15)};
  animation: ${animasjoner.vippOpp} 1s backwards;
  animation-delay: ${delay}s;
  transform-origin: bottom;
`;

const StyledSky = styled(Sky)`
  ${getStyle(50, 35)};
  animation: ${animasjoner.skyAnimasjon} 30s infinite alternate, ${animasjoner.popIn} 1s backwards ${delay + 1}s;
  width: 30%;
  left: 5%;
`;

const StyledLitenStjerne = styled(LitenStjerne)<{ top: number; right: number; size: number }>`
  position: absolute;
  top: ${(props) => props.top}%;
  height: ${(props) => props.size}%;
  right: ${(props) => props.right}%;
  stroke: none;
  fill: gold;
  animation: ${animasjoner.dropDown} 1s backwards, ${animasjoner.blink} 4s infinite;
  animation-delay: ${(props) => 1 / props.size + 2.2 + delay}s;
`;

const måneAnimasjon = keyframes`
  from {
    transform: rotate(90deg);
    opacity: 0;
  }
`;

const StyledMåne = styled(Måne)`
  position: absolute;
  top: 15%;
  left: 20%;
  fill: lightgoldenrodyellow;
  height: 7%;
  transform: rotate(15deg);
  animation: ${måneAnimasjon} 3s backwards 1s;
`;

const Tekst = styled.h2`
  font-weight: 400;
  animation: ${animasjoner.fadeIn} 5s;
  font-family: "Lobster", cursive;
  position: absolute;
  top: 20%;
  left: 40%;
  font-size: 20vmin;
  transform: rotate(-5deg);
  color: goldenrod;
  span:last-child {
    display: block;
    transform: translate(1em, -0.4em);
  }
`;

const useWindowHeight = () => {
  const [height, setHeight] = useState(0);
  useEffect(() => setHeight(window.innerHeight), []);
  return height;
};

const useSupportedBrowser = () => {
  const [supported, setSupported] = useState(true);
  useEffect(() => {
    const browser = detect();
    const compatibleBrowser = !["edge", "ie"].includes(browser?.name || "");
    setSupported(compatibleBrowser);
  }, []);
  return supported;
};

function Julekort() {
  const height = useWindowHeight();
  const supportedBrowser = useSupportedBrowser();

  if (!supportedBrowser) {
    return null;
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
      </Head>
      <Style
        height={height}
        aria-label="Julekort med animasjoner. Mørk blå nattehimmel som bakgrunn. En nymåne som sakte kommer til syne. Et fjell, en bondegård og et juletre som spretter opp. Julekuler som spretter frem fra treet. Små stjerner som dukker opp på himmelen. Snø som daler sakte ned."
      >
        <StyledLitenStjerne aria-label="Liten stjerne på himmelen" right={5} top={5} size={3} />
        <StyledLitenStjerne aria-label="Liten stjerne på himmelen" right={15} top={7} size={2} />
        <StyledLitenStjerne aria-label="Liten stjerne på himmelen" right={12} top={20} size={2.5} />
        <StyledMåne aria-label="Nymåne på himmelen" />
        <StyledSky aria-label="Liten sky som glir sakte frem og tilbake" />
        <StyledFjell aria-label="Fjell med snø i det fjerne" />
        <Snø />
        <StyledBondegård aria-label="Bondegård med snø på taket" />
        <Juletre />
        <Tekst>
          <span>God</span>
          <span>jul</span>
        </Tekst>
      </Style>
    </>
  );
}

export default withErrorBoundary(Julekort, "Julekort");
