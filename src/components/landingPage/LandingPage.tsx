import React from "react";
import styled from "styled-components";
import { getChildren } from "../../../sanity/components/forside/Forside";
import { PanelProps } from "../../pages";
import CustomComponent, { CustomComponentProps } from "../CustomComponent";
import { Header } from "../forside/Header";
import Panel from "../Panel";

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

export const LandingPage = (props: {
  overskrift: string;
  underoverskrift: string;
  bakgrunnsfarge?: string;
  lysTekst?: boolean;
  paneler?: (PanelProps | CustomComponentProps)[];
}) => {
  return (
    <div>
      <Header
        overskrift={props.overskrift}
        underoverskrift={props.underoverskrift}
        bakgrunnsfarge={props.bakgrunnsfarge ?? "#004367"}
        lysTekst={props.lysTekst}
        navLogoPosition="flex-start"
        tilForsidenLenke
      />
      <Content>
        <Panel backgroundColor="#333333" lysTekst>
          <Style>
            <Tekst>
              <h2>Vi skaper produktteam som skal ta NAV inn i fremtidens digitale velferdstilbud.</h2>
            </Tekst>
          </Style>
        </Panel>
        {props.paneler?.map((panel) =>
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
