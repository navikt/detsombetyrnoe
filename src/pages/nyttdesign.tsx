import * as React from "react";
import styled from "styled-components";
import Panel from "../components/Panel";
import { navFrontend } from "../styles/navFarger";
import { GlobalStyle } from "../styles/GlobalStyle";
import Githubstats from "./githubstats";
import Nøkkeltall from "../components/nøkkeltall/Nøkkeltall";
import { ResetCSS } from "../styles/reset.css";

const Style = styled.div``;

function NyttDesign() {
  return (
    <Style>
      <ResetCSS />
      <GlobalStyle />
      <Panel backgroundColor={navFrontend.navBlaDarken40} fontColor="white">
        Hei på deg
      </Panel>
      <Nøkkeltall />
      <Panel backgroundColor={navFrontend.navBlaDarken40} fontColor="white">
        Nytt panel
      </Panel>
      <Panel backgroundColor={navFrontend.navLilla} fontColor="white">
        Litt mer innhold
      </Panel>
      <Githubstats />
    </Style>
  );
}

export default NyttDesign;
