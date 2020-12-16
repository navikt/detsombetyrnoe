import * as React from "react";
import styled, { keyframes } from "styled-components/macro";

const descend = keyframes`
    from {
      top: -5%;
    }
    to {
      top: 105%;
    }
`;

const sway = keyframes`
  from {
    transform: translateX(-1rem);
  }
  to {
    transform: translateX(1rem);
  }
`;

const Base = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
`;

const SnoFlak = styled.div<{ offset: number; speed: number; sway: number; delay: number }>`
  position: absolute;
  top: 0;
  left: ${(props) => props.offset * 100}%;
  height: 0.5vmin;
  width: 0.5vmin;
  border-radius: 50%;
  background-color: white;
  opacity: 0.5;
  animation: ${descend} ease-out ${(props) => props.speed * 10 + 30}s both infinite,
    ${sway} ease-in-out 1.5s alternate infinite -${(props) => props.sway * 4}s;
  animation-delay: ${(props) => props.delay * 30 + 3}s;
`;

function Snø() {
  return (
    <Base>
      {[...new Array(10)].map((_, index) => (
        <SnoFlak key={index} speed={Math.random()} offset={Math.random()} sway={Math.random()} delay={Math.random()} />
      ))}
    </Base>
  );
}

export default Snø;
