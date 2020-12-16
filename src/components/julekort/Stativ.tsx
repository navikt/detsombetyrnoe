import * as React from "react";
import styled from "styled-components/macro";
import Sokk from "../../ikoner/Sokk";
import { navFrontend } from "../../styles/navFarger";
import { keyframes } from "styled-components/macro";
import { delay } from "./animasjoner";

const rotateIn = keyframes`
from {
  transform: rotateY(90deg);
}
`;

const Style = styled.div`
  animation: ${rotateIn} 0.5s backwards ${delay + 2.5}s;
  position: absolute;
  bottom: 1em;
  font-size: 2.5vmin;
  left: 48vw;
  width: 8em;
  height: 4em;
  border: 0.15em solid #333;
  border-top: none;
  border-bottom: none;
`;

const Tråd = styled.div`
  position: absolute;
  bottom: 3.5em;
  left: 0;
  right: 0;
  border-top: 0.1em black solid;
`;

const dropDown = keyframes`
  from {
    transform: rotateX(90deg);
  }
  70% {
    transform: rotateX(-20deg);
  }
  80% {
    transform: rotateX(15deg);
  }
  95% {
    transform: rotateX(-10deg);
  }
`;

const StyledSokk = styled(Sokk)`
  animation: ${dropDown} 0.5s ${delay + 3}s backwards;
  transform-origin: top;
  height: 2em;
  position: absolute;
  bottom: 1.5em;
  left: 3.5em;
  fill: ${navFrontend.navRod};
`;

function Stativ() {
  return (
    <Style>
      <Tråd />
      <StyledSokk />
    </Style>
  );
}

export default Stativ;
