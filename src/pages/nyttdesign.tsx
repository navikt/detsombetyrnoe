import * as React from "react";
import styled from "styled-components";
import Panel from "../components/Panel";
import { navFrontend } from "../styles/navFarger";
import Githubstats from "./githubstats";
import Nøkkeltall from "../components/nøkkeltall/Nøkkeltall";

const Style = styled.div``;

function NyttDesign() {
  return (
    <Style>
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
