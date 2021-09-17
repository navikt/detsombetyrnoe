import React from "react";
import styled from "styled-components";
import { getChildren } from "../../../sanity/components/forside/Forside";
import { LandingssideProps } from "../../pages/helenorge";
import CustomComponent from "../CustomComponent";
import { Header } from "../forside/Header";
import Panel from "../Panel";
import SEO from "../SEO";

const Content = styled.div`
  background-color: #262626;
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
        fetUnderskrift={landingPage?.fetUnderskrift}
        bakgrunnsfarge={landingPage?.bakgrunnsfarge ?? "#004367"}
        lysTekst={landingPage?.lysTekst}
        navLogoPosition="flex-start"
        tilForsidenLenke
      />
      <Content>
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
