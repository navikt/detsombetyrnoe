import * as React from "react";
import styled from "styled-components";
import { navFrontend } from "../styles/navFarger";

const Style = styled.div`
  background-color: ${navFrontend.navRod};
  color: white;
  padding: 0.5rem;
  width: 15rem;
  position: absolute;
  opacity: 0.5;
  text-align: center;
  transform: translate(-5rem, 1rem) rotate(-45deg);
  font-weight: bold;
`;

function PreviewBanner() {
  return <Style>Preview</Style>;
}

export default PreviewBanner;
