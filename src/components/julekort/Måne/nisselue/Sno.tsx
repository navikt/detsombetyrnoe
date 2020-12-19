import * as React from "react";
import styled, { keyframes } from "styled-components/macro";
import { useProgressContext } from "../../progress/ProgressContext";
import { useMount } from "react-use";

const descend = keyframes`
    from {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    85% {
      opacity: 1;
    }
      to {
        top: 60vh;
        opacity: 0;
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
  top: 0.4rem;
  left: 1.3rem;
  pointer-events: none;
`;

const SnoFlak = styled.div<{ offset: number; speed: number; sway: number }>`
  position: absolute;
  top: 0;
  left: ${(props) => props.offset * 1.5}rem;
  height: 0.2rem;
  width: 0.2rem;
  border-radius: 50%;
  background-color: white;
  z-index: 10;
  box-shadow: 0 0 2px #0008;
  animation: ${descend} linear ${(props) => props.speed}s both,
    ${sway} ease-in-out 1.5s alternate 20 -${(props) => props.sway * 2}s;
`;

function Sno() {
  const [, dispatch] = useProgressContext();
  useMount(() => dispatch("snø"));

  return (
    <Base>
      {[...new Array(10)].map((_, index) => (
        <SnoFlak key={index} speed={6 + Math.random() * 4} offset={0.5 - Math.random()} sway={Math.random()} />
      ))}
    </Base>
  );
}

export default Sno;
