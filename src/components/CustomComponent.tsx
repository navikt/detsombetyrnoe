import Stillinger from "./Stillinger";
import Panel from "./Panel";
import { WebcruiterStillinger } from "./landingPage/WebcruiterStillinger";
import { ArtikkelPreview } from "./artikkel/ArtikkelPreview";
import { PridePanel } from "./PridePanel";
import { SikkerhetStillinger } from "./landingPage/SikkerhetStillinger";
import style from "src/sanity/components/forside/Forside.module.css";
import Video from "./Video";
import Nøkkeltall from "./nøkkeltall/Nøkkeltall";
import { StillingI } from "src/app/(site)/page";
import styles from "./CustomComponent.module.css";

export interface CustomComponentProps {
  _type: "customComponent";
  id: string;
  lysBakgrunn?: boolean;
  lysTekst?: boolean;
  stillinger: StillingI[];
}

function CustomComponent(props: CustomComponentProps) {
  switch (props.id) {
    case "stillinger":
      return (
        <Panel lysBakgrunn={props.lysBakgrunn} lysTekst={props.lysTekst}>
          <Stillinger stillinger={props.stillinger} />
        </Panel>
      );
    case "sikkerhetStillinger":
      return (
        <Panel lysBakgrunn={props.lysBakgrunn} lysTekst={props.lysTekst}>
          <SikkerhetStillinger />
        </Panel>
      );
    case "heleNorgeStillinger":
      return (
        <Panel lysBakgrunn={props.lysBakgrunn} lysTekst={props.lysTekst}>
          <WebcruiterStillinger />
        </Panel>
      );
    case "heleNorgeForside":
      return (
        <Panel lysBakgrunn={props.lysBakgrunn} lysTekst={props.lysTekst}>
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
        <Panel lysBakgrunn={props.lysBakgrunn} lysTekst={props.lysTekst}>
          <div className={styles.style}>
            <div className={styles.tekst}>
              <h2>Vi søker nå minst 10 senior utviklere</h2>
            </div>
          </div>
        </Panel>
      );
    case "ddos":
      return (
        <Panel className={styles.panelMedVideo}>
          <div className={style.panelWrapper}>
            <div className={style.videoWrapper}>
              <Video title="Nav teknologi - DDOS" url="https://player.vimeo.com/video/831392694?title=0&byline=0" />
            </div>
          </div>
        </Panel>
      );
    case "nav_sikkerhet_video":
      return (
        <Panel className={styles.panelMedVideo}>
          <div className={style.panelWrapper}>
            <div className={style.videoWrapper}>
              <Video
                title="Nav teknologi - Sikkerhet"
                url="https://player.vimeo.com/video/1015154302?title=0&byline=0"
              />
            </div>
          </div>
        </Panel>
      );
    case "sikkerhet_nokkeltall":
      return (
        <Panel lysBakgrunn={props.lysBakgrunn}>
          <div style={{ maxWidth: "50rem" }}>
            <Nøkkeltall
              className={styles.sikkerhetNokkeltall}
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
