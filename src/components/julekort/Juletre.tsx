import * as React from "react";
import styled from "styled-components/macro";
import JuletreIkon from "./ikoner/JuletreIkon";
import LitenStjerne from "./ikoner/LitenStjerne";
import { animasjoner, delay } from "./animasjoner";
import Julekule from "./Julekule";

const JuletreWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 20vmin;
  height: min(35vmax, 70vh);
  animation: ${animasjoner.vippOpp} 1s backwards;
  animation-delay: ${delay + 1}s;
  transform-origin: bottom;
  font-size: min(1.6vmax, 3vh);
`;

const StyledJuletre = styled(JuletreIkon)`
  height: 100%;
  transform: translateY(10%);
  filter: brightness(50%);
`;

const JuletreSjerne = styled(LitenStjerne)`
  position: absolute;
  top: -2%;
  height: 15%;
  left: 50%;
  transform: translateX(-50%);
  stroke: none;
  fill: gold;
`;

function Juletre() {
  return (
    <JuletreWrapper aria-label="Juletre">
      <StyledJuletre />
      <JuletreSjerne aria-label="Julestjerne" />
      <Julekule top={22} left={22} farge="#FF0700" rotation={5} delay={0.3} />
      <Julekule top={35} left={50} farge="#123EAB" rotation={-5} delay={0.2} />
      <Julekule top={45} left={10} farge="#123EAB" rotation={3} delay={0.1} />
      <Julekule top={67} left={18} farge="#FFAB00" rotation={-3} delay={0.4} />
      <Julekule top={60} left={60} farge="#FF0700" rotation={5} delay={0.5} />
    </JuletreWrapper>
  );
}

export default Juletre;
