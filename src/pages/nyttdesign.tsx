import * as React from "react";
import styled from "styled-components";
import Panel from "../components/Panel";
import { navFrontend } from "../styles/navFarger";
import { GlobalStyle } from "../styles/GlobalStyle";
import Githubstats from "./githubstats";

const Style = styled.div``;

function NyttDesign() {
  return (
    <Style>
      <GlobalStyle />
      <Panel backgroundColor={navFrontend.navBlaDarken40} fontColor="white">
        Hei på deg
      </Panel>
      <Panel>Nytt panel</Panel>
      <Panel backgroundColor={navFrontend.navLilla} fontColor="white">
        Litt mer innhold
      </Panel>
      <Githubstats />
    </Style>
  );
}

export default NyttDesign;
