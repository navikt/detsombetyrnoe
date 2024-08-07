import * as React from "react";
import ForsideProvider from "../../../src/components/forside/ForsideProvider";
import SEO from "../../../src/components/SEO";
import { Header } from "../../../src/components/forside/Header";
import CustomComponent from "../../../src/components/CustomComponent";
import Panel from "../../../src/components/Panel";
import { ForsideProps, PanelProps } from "../../../src/pages";
import Nøkkeltall from "../../../src/components/nøkkeltall/Nøkkeltall";
import ArtikkelPreview from "../../../src/components/artikkel/ArtikkelPreview";
import { Footer } from "../../../src/components/Footer";
import { WebcruiterStillinger } from "../../../src/components/landingPage/WebcruiterStillinger";
import Video from "../../../src/components/Video";
import style from "./Forside.module.css";

export function getChildren(innhold?: PanelProps["innhold"]) {
  if (!innhold) {
    return "Mangler innhold";
  }

  switch (innhold._type) {
    case "nokkeltall":
      return <Nøkkeltall {...innhold} />;
    case "placeholder":
      return innhold.tittel;
    case "artikkel":
      return <ArtikkelPreview {...innhold} />;
    default:
      // @ts-ignore
      return `Fant ikke innhold for ${innhold._type} 🤷‍♀️`;
  }
}

function Forside(props: ForsideProps) {
  return (
    <ForsideProvider forsideProps={props}>
      <SEO metadata={props.metaData} />
      <Header
        overskrift={props.forside?.overskrift}
        underoverskrift={props.forside?.underoverskrift}
        //bakgrunnsvideo={props.forside?.bakgrunnsvideo}
        bildeSrc="/NAV_postgres_still_banner.jpg"
        bakgrunnsfarge={props.forside?.bakgrunnsfarge}
        lysTekst={props.forside?.lysTekst}
        visGithubLenke={true}
      />
      <Panel>
        <WebcruiterStillinger />
      </Panel>
      <div>
        <div className={style.panelWrapper}>
          <div className={style.videoWrapper}>
            <h2 style={{ marginBlockStart: "2rem", marginBlockEnd: "1.5rem" }}>Velkommen til IT-avdelingen i NAV!</h2>
            <Video title="NAV IT - Postgres i sky" url="https://player.vimeo.com/video/939482220?title=0&byline=0" />
          </div>
        </div>
      </div>

      {props.forside?.paneler?.map((panel) =>
        panel._type === "customComponent" ? (
          <CustomComponent
            {...panel}
            stillinger={props.stillinger ?? []}
            utviklereHeleNorge={props.forside?.utviklereHeleNorge}
            key={panel.id}
          />
        ) : (
          <Panel
            key={panel._key}
            backgroundColor={panel.bakgrunnsfarge}
            lysTekst={panel.lysTekst}
            children={getChildren(panel.innhold)}
          />
        )
      )}
      <Footer
        tittel={props.metaData.privacyArticle.tittel}
        slug={props.metaData.privacyArticle.slug}
        backgroundColor={props.forside?.bakgrunnsfarge}
        lysTekst={props.forside?.lysTekst}
      />
    </ForsideProvider>
  );
}

export default Forside;
