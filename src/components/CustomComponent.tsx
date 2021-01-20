import * as React from "react";
import Githubstats from "./githubstats/Githubstats";
import Stillinger from "./stillinger";
import Panel from "./Panel";
import { navFrontend } from "../styles/navFarger";

export interface CustomComponentProps {
  _type: "customComponent";
  id: string;
}

function CustomComponent(props: CustomComponentProps) {
  switch (props.id) {
    case "github":
      return <Githubstats />;
    case "stillinger":
      return (
        <Panel backgroundColor={"white"}>
          <Stillinger />
        </Panel>
      );
    default:
      return <div>Fant ikke komponenten med id {props.id}</div>;
  }
}

export default CustomComponent;
