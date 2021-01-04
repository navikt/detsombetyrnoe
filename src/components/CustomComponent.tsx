import * as React from "react";
import HvemViEr from "./HvemViEr";
import Githubstats from "./githubstats/Githubstats";

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
