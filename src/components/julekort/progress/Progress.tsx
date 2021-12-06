import * as React from "react";
import styled, { css } from "styled-components";
import HjerteIkon from "../ikoner/HjerteIkon";
import { navFrontend } from "../../../styles/navFarger";
import { useProgressContext } from "./ProgressContext";

const Style = styled.div`
  position: absolute;
  font-size: 3vmin;
  top: 1em;
  left: 1em;
  display: flex;
  opacity: 0.5;
`;

const StyledHjerteIkon = styled(HjerteIkon)<{ filled: boolean }>`
  height: 1em;
  margin-right: 0.25em;
  fill: #0006;
  stroke: #666;
  stroke-dasharray: 2;
  transition: 1s;
  ${(props) =>
    props.filled &&
    css`
      stroke: none;
      fill: ${navFrontend.navRod};
    `}
`;

function Progress() {
  const [progress] = useProgressContext();

  const completed = Object.entries(progress).filter((it) => it[1]);

  return (
    <Style>
      <StyledHjerteIkon filled={completed.length > 0} />
      <StyledHjerteIkon filled={completed.length > 1} />
      <StyledHjerteIkon filled={completed.length > 2} />
    </Style>
  );
}

export default Progress;
