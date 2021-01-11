import * as React from "react";
import GithubHeader from "./GithubHeader";
import Repositories from "./Repositories";
import styled from "styled-components";
import { navFrontend } from "../../styles/navFarger";
import { GithubData } from "../../api-utils/github/types";
import Panel from "../Panel";

const Style = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  > * {
    flex-grow: 1;
    margin: 1vmin;
    background-color: rgba(0, 0, 0, 0.2);
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function GithubstatsView(props: GithubData) {
  return (
    <Panel backgroundColor={navFrontend.navBlaDarken60} lysTekst={true}>
      <Style>
        <GithubHeader github={props} />
        <Repositories repos={props.organization.publicRepositories.nodes} />
      </Style>
    </Panel>
  );
}

export default GithubstatsView;
