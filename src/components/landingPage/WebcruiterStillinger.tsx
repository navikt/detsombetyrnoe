import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useAmplitude } from "../../contexts/amplitude-context";

interface Props {
  tittel: string;
  beskrivelse?: string;
  url: string;
  bildeUrl?: string;
}

const Style = styled.div`
  --content-max-width: min(32.5rem, 100%);
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

const StillingPanel = styled.a`
  display: block;
  flex: 1;
  border: 0.5rem solid #ffffff;
  background-color: #ffffff;
  color: #262626 !important;
  padding: 1rem;
  text-decoration: none;

  :hover,
  :focus {
    background-color: #004367;
    color: #ffffff !important;
    box-shadow: none;
  }

  h3 {
    font-size: 25px;
  }
`;

const FlexContainer = styled.div<{ direction: "column" | "row" }>`
  max-width: 740px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  flex-direction: ${(props) => props.direction};

  @media screen and (max-width: 470px) {
    flex-direction: column;
  }
`;

export const WebcruiterStillinger = () => {
  const { logAmplitudeEvent } = useAmplitude();

  const handleClick = (event: any) => {
    event.preventDefault();
    const url = event.currentTarget.href;
    const title = event.currentTarget.title;
    logAmplitudeEvent("Går til kampanjestilling", {
      title,
    });
    window.location.assign(url);
  };

  return (
    <Style>
      <Tekst>
        <h2>Vil du være med å løse NAVs samfunnsoppdrag med din kompetanse innen data?</h2>
        <p>
          Vår visjon er å gi mennesker muligheter. Hvert år leverer vi tjenester til millioner av mennesker, og
          forvalter helt unike data som vi vil benytte på en ansvarlig måte. Vi vil skape et datadrevet NAV der vi tar
          beslutninger basert på fakta, hvor vi lærer fra data og lager bedre tjenester til våre brukere.
        </p>
      </Tekst>
      <FlexContainer direction="column">
        <FlexContainer direction="row">
          <StillingPanel
            href="https://2106.webcruiter.no/Main2/Recruit/Public/4615471221?link_source_id=4351477319"
            title="data scientist"
            onClick={handleClick}
          >
            <h3>Data scientist</h3>
            <p>
              For deg som vil jobbe med innsikt og bedre beslutningsstøtte for brukere og ansatte i form av data,
              analyser, prediksjoner og visuelle fremstillinger
            </p>
          </StillingPanel>
        </FlexContainer>
        <Link href="/#ledige-stillinger" passHref legacyBehavior>
          <StillingPanel>
            <h3>Se alle stillinger i NAV IT</h3>
            <p>Vi er stadig på utkikk etter nye kollegaer, sjekk ut andre ledige stillinger her!</p>
          </StillingPanel>
        </Link>
      </FlexContainer>
    </Style>
  );
};
