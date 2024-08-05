import * as React from "react";
import Stillinger from "./Stillinger";
import Panel from "./Panel";
import Bloggposter from "./forside/Bloggposter";
import { WebcruiterStillinger } from "./landingPage/WebcruiterStillinger";
import styled from "styled-components";
import ArtikkelPreview from "./artikkel/ArtikkelPreview";
import { PridePanel } from "./PridePanel";
import { StillingI, UtviklerHeleNorge } from "../pages";
import { SikkerhetStillinger } from "./landingPage/SikkerhetStillinger";
import style from "../../sanity/components/forside/Forside.module.css";
import Video from "./Video";
import Nøkkeltall from "./nøkkeltall/Nøkkeltall";

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

const PanelMedVideo = styled(Panel)`
  display: block !important;
`;

const SikkerhetNokkeltall = styled(Nøkkeltall)`
  --content-max-width: min(40rem, 100%);
`;

function CustomComponent(props: CustomComponentProps) {
  switch (props.id) {
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
    case "ddos":
      return (
        <PanelMedVideo>
          <div className={style.panelWrapper}>
            <div className={style.videoWrapper}>
              <Video title="NAV IT - DDOS" url="https://player.vimeo.com/video/831392694?title=0&byline=0" />
            </div>
          </div>
        </PanelMedVideo>
      );
    case "sikkerhet_nokkeltall":
      return (
        <Panel>
          <div style={{ maxWidth: "50rem" }}>
            <SikkerhetNokkeltall
              _type="nokkeltall"
              nokkeltall={[
                {
                  antall: "1/3",
                  description: "av statsbudsjettet forvaltes av NAV",
                  _key: "statsbudsjett",
                  _type: "nokkeltallTekst",
                },
                {
                  antall: "65",
                  title: "Security champions",
                  description: "En security champion er en pådriver og motivator i sikkerhetsarbeidet i teamet",
                  _key: "sec_champion",
                  _type: "nokkeltallTekst",
                },
                {
                  antall: "2,8",
                  description: "millioner brukere leverer NAV tjenester til årlig",
                  _key: "brukere",
                  _type: "nokkeltallTekst",
                },
              ]}
            />
          </div>
        </Panel>
      );
    case "pride":
      return <PridePanel />;
    default:
      return <div></div>;
  }
}

export default CustomComponent;
