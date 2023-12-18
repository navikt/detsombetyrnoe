import * as React from "react";
import Githubstats from "./githubstats/Githubstats";
import Stillinger from "./Stillinger";
import Panel from "./Panel";
import Bloggposter from "./forside/Bloggposter";
import { WebcruiterStillinger } from "./landingPage/WebcruiterStillinger";
import Link from "next/link";
import styled from "styled-components";
import Artikkel from "./artikkel/Artikkel";
import ArtikkelPreview from "./artikkel/ArtikkelPreview";
import { PridePanel } from "./PridePanel";
import { StillingI, UtviklerHeleNorge } from "../pages";
import { Map } from "../components/Map/Map";
import { SikkerhetStillinger } from "./landingPage/SikkerhetStillinger";

export interface CustomComponentProps {
  _type: "customComponent";
  id: string;
  bakgrunnsfarge?: string;
  lysTekst?: boolean;
  stillinger: StillingI[];
  utviklereHeleNorge?: UtviklerHeleNorge[];
}

const Style = styled.div`
  --content-max-width: min(40rem, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tekst = styled.div`
  margin-bottom: 5vh;
  p {
    margin: 2rem 0;
  }
  max-width: var(--content-max-width);
`;

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
          <Stillinger stillinger={props.stillinger} />
        </Panel>
      );
    case "blogg":
      return (
        <Panel backgroundColor={props.bakgrunnsfarge} lysTekst={props.lysTekst}>
          <Bloggposter />
        </Panel>
      );
      {
        /*case "heleNorgeKart":
      return (
        <Panel backgroundColor={props.bakgrunnsfarge} lysTekst={props.lysTekst}>
          <div>
            <h2 style={{ marginBottom: "0.75rem" }}>Vi har utviklere spredt rundt i landet</h2>
            <Map markers={props.utviklereHeleNorge} />
          </div>
        </Panel>
      );*/
      }
    case "sikkerhetStillinger":
      return (
        <Panel backgroundColor={props.bakgrunnsfarge} lysTekst={props.lysTekst}>
          <SikkerhetStillinger />
        </Panel>
      );
    case "heleNorgeStillinger":
      return (
        <Panel backgroundColor={props.bakgrunnsfarge} lysTekst={props.lysTekst}>
          <WebcruiterStillinger />
        </Panel>
      );
    case "heleNorgeForside":
      return (
        <Panel backgroundColor={props.bakgrunnsfarge} lysTekst={props.lysTekst}>
          {/* @ts-ignore */}
          <ArtikkelPreview
            tittel="Nå søker vi utviklere over hele Norge"
            slug={{ current: "helenorge" }}
            lesMerTekst="Les mer om stillingene våre"
          />
        </Panel>
      );
    case "heleNorgeLandingPageOverskrift":
      return (
        <Panel backgroundColor={props.bakgrunnsfarge} lysTekst={props.lysTekst}>
          <Style>
            <Tekst>
              <h2>Vi søker nå minst 10 senior utviklere</h2>
            </Tekst>
          </Style>
        </Panel>
      );
    case "pride":
      return <PridePanel />;
    default:
      return <div></div>;
  }
}

export default CustomComponent;
