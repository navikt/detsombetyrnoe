import * as React from "react";
import styled from "styled-components/macro";
import NavLogo from "../../ikoner/navlogo";
import { useRef } from "react";
import { motion } from "framer-motion";
import Parallax from "../Parallax";
import Panel from "../Panel";

const Style = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
`;

const DotStyle = styled(motion.div)`
  position: absolute;
  width: 1rem;
  height: 1rem;
  background-color: white;
  opacity: 0.1;
  border-radius: 50%;
`;

function Dot() {
  const position = useRef({ x: Math.random() * 100, y: Math.random() * 80 }).current;
  const size = useRef(Math.random() * 5 + 2).current;
  const delay = useRef(Math.random() * 0.75 + 0.75).current;
  const rotate = useRef(Math.random() * 30 - 15).current;

  return (
    <DotStyle
      transition={{ delay, type: "spring" }}
      initial={{ scale: 0 }}
      animate={{ scale: size, rotate }}
      style={{ top: position.y + "%", left: position.x + "%" }}
    />
  );
}

function Dots() {
  return (
    <Style>
      {[...new Array(20)].map((_, i) => (
        <Dot />
      ))}
    </Style>
  );
}

export default Dots;
