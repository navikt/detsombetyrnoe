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
        bakgrunnsvideo={props.forside?.bakgrunnsvideo}
        bakgrunnsfarge={props.forside?.bakgrunnsfarge}
        lysTekst={props.forside?.lysTekst}
        visGithubLenke={true}
      />
      <Panel>
        <WebcruiterStillinger />
      </Panel>
      {props.forside?.paneler?.map((panel) =>
        panel._type === "customComponent" ? (
          <CustomComponent {...panel} key={panel.id} />
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
