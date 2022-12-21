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
import styled from "styled-components";

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

const PanelWrapper = styled.div`
  --content-max-width: min(32.5rem, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoWrapper = styled.div`
  width: calc(var(--content-max-width) * 1.15);
  max-width: 100vw;
`;

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
      <div>
        <PanelWrapper>
          <VideoWrapper>
            <Video title="NAV IT - WCAG" url="https://player.vimeo.com/video/783200916?title=0&byline=0" />
            <Video
              title="NAV IT - Continuous Delivery"
              url="https://player.vimeo.com/video/783201977?title=0&byline=0"
            />
            <Video title="NAV IT - Parprogrammering" url="https://player.vimeo.com/video/783202969?title=0&byline=0" />
          </VideoWrapper>
        </PanelWrapper>
      </div>
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
