import * as React from "react";
import Githubstats from "../pages/githubstats";
import HvemViEr from "./HvemViEr";

export interface CustomComponentProps {
  _type: "customComponent";
  id: string;
}

function CustomComponent(props: CustomComponentProps) {
  switch (props.id) {
    case "github":
      return <Githubstats />;
    case "Hvem vi er":
      return <HvemViEr />;
    default:
      return <div>Fant ikke komponenten med id ${props.id}</div>;
  }
}

export default CustomComponent;
