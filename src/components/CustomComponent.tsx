import * as React from "react";
import Githubstats from "./githubstats/Githubstats";
import Stillinger from "./Stillinger";
import Panel from "./Panel";
import Bloggposter from "./forside/Bloggposter";
import { WebcruiterStillinger } from "./landingPage/WebcruiterStillinger";

export interface CustomComponentProps {
  _type: "customComponent";
  id: string;
  bakgrunnsfarge?: string;
  lysTekst?: boolean;
}

function CustomComponent(props: CustomComponentProps) {
  switch (props.id) {
    case "github":
      return (
        <Panel backgroundColor={props.bakgrunnsfarge} lysTekst={props.lysTekst}>
          <Githubstats />
        </Panel>
      );
    case "stillinger":
      return (
        <Panel backgroundColor={props.bakgrunnsfarge} lysTekst={props.lysTekst}>
          <Stillinger />
        </Panel>
      );
    case "blogg":
      return (
        <Panel backgroundColor={props.bakgrunnsfarge} lysTekst={props.lysTekst}>
          <Bloggposter />
        </Panel>
      );
    case "heleNorgeStillinger":
      return (
        <Panel backgroundColor={props.bakgrunnsfarge} lysTekst={props.lysTekst}>
          <WebcruiterStillinger />
        </Panel>
      );
    default:
      return <div>Fant ikke komponenten med id {props.id}</div>;
  }
}

export default CustomComponent;
