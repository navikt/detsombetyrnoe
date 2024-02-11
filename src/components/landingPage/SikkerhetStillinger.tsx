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

export const SikkerhetStillinger = () => {
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
        <h2>Vi har mål som legger lista høyt. Vil du være med å bidra til at vi når dem?</h2>
        <p>
          De rette kandidatene vil få muligheten til å jobbe med banebrytende teknologi og bidra i en organisasjon som
          har en direkte innvirkning på samfunnet.
        </p>
      </Tekst>
      <FlexContainer direction="column">
        <FlexContainer direction="row">
          <StillingPanel
            href="https://2106.webcruiter.no/Main2/Recruit/Public/4761580113?link_source_id=4351476949"
            title=""
            onClick={handleClick}
          >
            <h3>Seniorrådgiver sikkerhetsrisiko</h3>
            <p>Vil du jobbe med sikkerhet på strategisk og taktisk nivå?</p>
          </StillingPanel>
        </FlexContainer>
        <Link href="/#ledige-stillinger" passHref legacyBehavior>
          <StillingPanel>
            <h3>Se flere ledige stillinger i NAV</h3>
            <p>Vi er stadig på utkikk etter nye kollegaer, sjekk ut andre ledige stillinger her!</p>
          </StillingPanel>
        </Link>
      </FlexContainer>
    </Style>
  );
};
