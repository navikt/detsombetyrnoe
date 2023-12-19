import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { PanelWrapper, VideoWrapper, getChildren } from "../../../sanity/components/forside/Forside";
import { LandingssideProps } from "../../pages/helenorge";
import CustomComponent from "../CustomComponent";
import { Footer } from "../Footer";
import { Header } from "../forside/Header";
import Panel from "../Panel";
import SEO from "../SEO";
import Video from "../Video";

const Content = styled.div``;

export const LandingPage = (props: LandingssideProps) => {
  const { landingPage, metaData } = props;

  const updatedMetadata = {
    ...metaData,
    previewImage: landingPage?.previewImage ?? metaData?.previewImage,
    title: `${metaData.title} - ${landingPage?.overskrift}`,
    description: landingPage?.underoverskrift ?? metaData.description,
  };

  return (
    <div>
      <SEO metadata={updatedMetadata} url="https://detsombetyrnoe.no/sikkerhet" />
      <Header
        overskrift={landingPage?.overskrift}
        underoverskrift={landingPage?.underoverskrift}
        fetUnderskrift={landingPage?.fetUnderskrift}
        bakgrunnsfarge={landingPage?.bakgrunnsfarge ?? "#004367"}
        lysTekst={landingPage?.lysTekst}
        navLogoPosition="flex-start"
        tilForsidenLenke
      />
      <Content>
        <div>
          <PanelWrapper>
            <VideoWrapper>
              <h2 style={{ marginBlockStart: "2rem", marginBlockEnd: "1.5rem" }}>Velkommen til IT-avdelingen i NAV!</h2>
              <Video title="NAV IT - DDOS Angrep" url="https://player.vimeo.com/video/831392694?title=0&byline=0" />
            </VideoWrapper>
          </PanelWrapper>
        </div>
        {landingPage?.paneler?.map((panel) =>
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
        {/*<Footer
          tittel={metaData.privacyArticle.tittel}
          slug={metaData.privacyArticle.slug}
          backgroundColor={landingPage?.bakgrunnsfarge}
          lysTekst={landingPage?.lysTekst}
          />*/}
      </Content>
    </div>
  );
};
