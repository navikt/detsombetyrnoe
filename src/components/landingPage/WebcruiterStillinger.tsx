import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useAmplitude } from "../../contexts/amplitude-context";
//import metrics from "src/lib/metrics";

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
    //metrics.clickStillingCounter.inc({ title, page: "webcruiter" });
    window.location.assign(url);
  };

  return (
    <Style>
      {/*<Tekst>
        <h2>Er du teknologileder med hjerte for velferdsstaten?</h2>
        <p>
          I Nav har vi som mål å være en ledestjerne for digitalisering i offentlig sektor, og vi har nettopp
          gjennomført en større omorganisering av direktoratet og teknologiavdelingen i Nav. Nå etablerer
          teknologidirektøren en ny ledergruppe som skal drive den strategiske utviklingen av avdelingen og
          teknologiområdet i Nav.
        </p>
      </Tekst>*/}
      <FlexContainer direction="column">
        {/*<FlexContainer direction="row">
          <StillingPanel
            href="https://arbeidsplassen.nav.no/stillinger/stilling/55f20b33-d61a-4c8c-ba80-f9ee3b6a51e7"
            title="Avdelingsdirektør data og informasjonsforvaltning"
            onClick={handleClick}
          >
            <h3>Avdelingsdirektør data og informasjonsforvaltning</h3>
            <p>Vil du lede Navs arbeid med data, informasjon og kunstig intelligens?</p>
          </StillingPanel>
        </FlexContainer>
        <FlexContainer direction="row">
          <StillingPanel
            href="https://arbeidsplassen.nav.no/stillinger/stilling/c92b8ea8-da7c-4920-8c18-b1016372ecf7"
            title="Avdelingsdirektør plattform og infrastruktur"
            onClick={handleClick}
          >
            <h3>Avdelingsdirektør plattform og infrastruktur</h3>
            <p>Vil du ta ansvar for plattformene og infrastrukturen velferdsstaten kjører på?</p>
          </StillingPanel>
        </FlexContainer>
        <FlexContainer direction="row">
          <StillingPanel
            href="https://arbeidsplassen.nav.no/stillinger/stilling/e38934a9-95ba-4e13-b5f3-c3ec0d2ef18e"
            title="Avdelingsdirektør utvikling"
            onClick={handleClick}
          >
            <h3>Avdelingsdirektør utvikling</h3>
            <p>Vil du lede teknologene som bygger den norske velferdsstaten?</p>
          </StillingPanel>
        </FlexContainer>*/}
        <Link href="/#ledige-stillinger" passHref legacyBehavior>
          <StillingPanel>
            <h3>Se våre ledige stillinger</h3>
            <p>Vi er stadig på utkikk etter nye kollegaer, sjekk ut ledige stillinger her!</p>
          </StillingPanel>
        </Link>
      </FlexContainer>
    </Style>
  );
};
