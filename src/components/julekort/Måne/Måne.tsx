import * as React from "react";
import styled, { keyframes } from "styled-components/macro";
import MåneIkon from "../ikoner/MåneIkon";
import Nisselue from "./nisselue/Nisselue";
import { useState } from "react";

const Style = styled.div`
  position: absolute;
  top: 15%;
  left: 20%;
`;

const måneAnimasjon = keyframes`
  from {
    transform: rotate(90deg);
    opacity: 0;
  }
`;

const StyledMåne = styled(MåneIkon)<{ nisselue: boolean }>`
  fill: lightgoldenrodyellow;
  width: 7vh;
  transform: rotate(15deg);
  animation: ${måneAnimasjon} 3s backwards 1s;
  cursor: ${(props) => (props.nisselue ? "auto" : "pointer")};
`;

function Måne() {
  const [visNisselue, setVisNisselue] = useState(false);

  return (
    <Style aria-label="Nymåne på himmelen">
      <StyledMåne onClick={() => setVisNisselue(true)} nisselue={visNisselue} />
      {visNisselue && <Nisselue />}
    </Style>
  );
}

export default Måne;
