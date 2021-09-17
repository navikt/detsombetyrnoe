import React from "react";
import styled from "styled-components";
import { getChildren } from "../../../sanity/components/forside/Forside";
import { PanelProps } from "../../pages";
import { LandingssideProps } from "../../pages/helenorge";
import CustomComponent, { CustomComponentProps } from "../CustomComponent";
import { Header } from "../forside/Header";
import Panel from "../Panel";
import SEO from "../SEO";

const Content = styled.div`
  background-color: #262626;
`;

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

export const LandingPage = (props: LandingssideProps) => {
  const { landingPage, metaData } = props;

  const updatedMetadata = { ...metaData, previewImage: landingPage?.previewImage ?? metaData?.previewImage };

  return (
    <div>
      <SEO metadata={updatedMetadata} />
      <Header
        overskrift={landingPage?.overskrift}
        underoverskrift={landingPage?.underoverskrift}
        bakgrunnsfarge={landingPage?.bakgrunnsfarge ?? "#004367"}
        lysTekst={landingPage?.lysTekst}
        navLogoPosition="flex-start"
        tilForsidenLenke
      />
      <Content>
        <Panel backgroundColor="#004367" lysTekst>
          <Style>
            <Tekst>
              <h2>Vi skaper produktteam som skal ta NAV inn i fremtidens digitale velferdstilbud.</h2>
            </Tekst>
          </Style>
        </Panel>
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
      </Content>
    </div>
  );
};
