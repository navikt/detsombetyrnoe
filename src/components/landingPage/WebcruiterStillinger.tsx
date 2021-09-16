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
    const url = event.target.href;
    const title = event.target.title;
    logAmplitudeEvent("Går til kampanjestilling", {
      title,
    });
    window.location.assign(url);
  };

  return (
    <Style>
      <Tekst>
        <h2>Ledige stillinger</h2>
      </Tekst>
      <FlexContainer direction="column">
        <FlexContainer direction="row">
          <StillingPanel href="#" title="fullstackutvikler" onClick={handleClick}>
            <h3>Fullstack-utvikler</h3>
            <p>For deg som liker å jobbe med helheten back til front</p>
          </StillingPanel>
          <StillingPanel href="#" title="backendutvikler" onClick={handleClick}>
            <h3>Backend-utvikler</h3>
            <p>For deg som vil fordype deg i domenelogikk og forenkle komplekse prosesser</p>
          </StillingPanel>
        </FlexContainer>
        <FlexContainer direction="row">
          <StillingPanel href="#" title="frontendutvikler" onClick={handleClick}>
            <h3>Frontend-utvikler</h3>
            <p>
              Med en fot i kodingens verden og en i den visuelle, lager du løsningene som forenkler folks digitale
              hverdag
            </p>
          </StillingPanel>
          <StillingPanel href="#" title="platformutvikler" onClick={handleClick}>
            <h3>Platform-utvikler</h3>
            <p>Brenner du for utvikleropplevelsen og å gjøre livet for andre utviklere lettere og bedre? </p>
          </StillingPanel>
        </FlexContainer>
        <Link href="/" passHref>
          <StillingPanel href="#">
            <h3>Se alle stillinger i NAV IT</h3>
            <p>
              For å danne team trenger vi designere i ulike varianer, produkeiere og andre fagfelt. Se alle stillinger
              som danner en godt produkt team.
            </p>
          </StillingPanel>
        </Link>
      </FlexContainer>
    </Style>
  );
};
