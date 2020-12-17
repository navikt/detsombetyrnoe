import * as React from "react";
import styled, { keyframes } from "styled-components/macro";
import { delay } from "./animasjoner";

const size = "3em";

interface Props {
  top: number;
  left: number;
  farge: string;
  rotation: number;
  delay: number;
}

const popUp = keyframes`
  from {
    transform: scale(0);
  }
  70% {
    transform: scale(1.2);
  }
`;

const PopInAnimation = styled.div<Props>`
  animation: ${popUp} 0.5s backwards 1s;
  animation-delay: ${(props) => delay + 1.7 + props.delay}s;
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
`;

const shake = keyframes`
  from {
    transform: rotate(5deg);
  }
  to {
    transform: rotate(-5deg);
  }
`;

const ShakeAnimation = styled.div`
  animation: ${shake} 0.1s 6 alternate linear -0.05s;
  transform-origin: top;
  &:hover {
    animation: none;
  }
  pointer-events: auto;
`;

const JulekuleStyle = styled.div<Props>`
  transform: rotate(${(props) => props.rotation}deg);
  display: flex;
  background-color: ${(props) => props.farge};
  font-family: "Lobster", cursive;
  background-image: radial-gradient(circle at right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  border-radius: 50%;
  height: ${size};
  width: ${size};
  align-items: center;
  justify-content: center;
  color: white;
`;

const Base = styled.span`
  position: absolute;
  display: block;
  width: 1em;
  height: 0.3em;
  top: -0.2em;
  background-color: white;
  left: 50%;
  margin-left: -0.5em;
  border-radius: 0.1em 0.1em 0 0;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
`;

const width = ".13em";

const Snor = styled.span`
  box-sizing: border-box;
  position: absolute;
  border-left: white solid ${width};
  height: 0.4em;
  top: -0.6em;
  left: calc(${size} / 2);
  transform: translateX(-50%);
  &::after {
    content: "";
    position: absolute;
    top: -0.4em;
    border: ${width} solid white;
    left: -${width};
    width: 0.6em;
    height: 0.5em;
    border-top-left-radius: 10em;
    border-top-right-radius: 10em;
    border-bottom: 0;
  }
`;

const Julekule = (props: Props) => {
  return (
    <PopInAnimation {...props}>
      <ShakeAnimation>
        <JulekuleStyle aria-label="Julekule" {...props}>
          <Snor />
          <Base />
          nav
        </JulekuleStyle>
      </ShakeAnimation>
    </PopInAnimation>
  );
};
export default Julekule;
