import * as React from "react";
import Githubstats from "./githubstats/Githubstats";

export interface CustomComponentProps {
  _type: "customComponent";
  id: string;
}

function CustomComponent(props: CustomComponentProps) {
  switch (props.id) {
    case "github":
      return <Githubstats />;
    default:
      return <div>Fant ikke komponenten med id {props.id}</div>;
  }
}

export default CustomComponent;
