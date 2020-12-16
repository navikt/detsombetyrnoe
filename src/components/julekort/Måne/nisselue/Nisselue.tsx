import * as React from "react";
import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components/macro";
import Sno from "./Sno";
import NisselueIkon from "./NisselueIkon";

const dropDown = keyframes`
  from {
    top: -30vh;
  }
`;

const shake = keyframes`
  from {
    margin-left: -.2rem;
  }
  to {
    margin-left: .2rem;
  }
`;

const Position = styled.div`
  position: absolute;
  left: 0;
  top: -3vh;
  animation: ${dropDown} 2.5s backwards;
`;

const StyledNisselue = styled(NisselueIkon)<{ shake: boolean; clickable: boolean }>`
  height: 10vh;
  ${(props) =>
    props.clickable &&
    css`
      cursor: pointer;
    `};
  ${(props) =>
    props.shake &&
    css`
      animation: ${shake} 0.1s linear -0.05s 4.5 alternate;
    `};
`;

function Nisselue() {
  const [sno, setSno] = useState(false);

  useEffect(() => {
    if (sno) {
      const timeout = setTimeout(() => setSno(false), 10000);
      return () => clearTimeout(timeout);
    }
    return () => null;
  }, [sno]);

  return (
    <Position>
      {sno && <Sno />}
      <StyledNisselue shake={sno} onClick={() => setSno(true)} clickable={!sno} aria-label="nisselue" />
    </Position>
  );
}

export default Nisselue;
