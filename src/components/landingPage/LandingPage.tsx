import React from "react";
import styled from "styled-components";
import { LandingssideProps } from "../../pages/helenorge";
import CustomComponent from "../CustomComponent";
import { Footer } from "../Footer";
import { Header } from "../forside/Header";
import SEO from "../SEO";
import Tekstblokk from "../Tekstblokk";

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
      <SEO metadata={updatedMetadata} url="https://detsombetyrnoe.no/jobb-med-sikkerhet" />
      <Header
        overskrift={landingPage?.overskrift}
        underoverskrift={landingPage?.underoverskrift}
        fetUnderskrift={landingPage?.fetUnderskrift}
        bakgrunnsfarge={landingPage?.bakgrunnsfarge ?? "#004367"}
        lysTekst={landingPage?.lysTekst}
        navLogoPosition="flex-start"
        tilForsidenLenke
        bildeSrc="/sikkerhet_header.jpg"
      />
      <Content>
        {/*<div>
          <PanelWrapper>
            <VideoWrapper>
              <h2 style={{ marginBlockStart: "2rem", marginBlockEnd: "1.5rem" }}>Velkommen til IT-avdelingen i NAV!</h2>
              <Video title="NAV IT - DDOS Angrep" url="https://player.vimeo.com/video/831392694?title=0&byline=0" />
            </VideoWrapper>
          </PanelWrapper>
  </div>*/}
        {landingPage?.paneler?.map((panel) => {
          if (panel._type === "customComponent") {
            return <CustomComponent {...panel} key={panel.id} />;
          }
          if (panel._type === "tekstblokk") {
            console.log("tekstblokk", panel);
            return (
              <Tekstblokk
                key={panel._key}
                backgroundColor={panel.bakgrunnsfarge}
                lysTekst={panel.lysTekst}
                overskrift={panel.overskrift}
                tekst={panel.tekst}
                artikkel={panel.artikkel}
              />
            );
          }
        })}
        <Footer
          tittel={metaData.privacyArticle.tittel}
          slug={metaData.privacyArticle.slug}
          backgroundColor={landingPage?.bakgrunnsfarge}
          lysTekst={false}
        />
      </Content>
    </div>
  );
};
