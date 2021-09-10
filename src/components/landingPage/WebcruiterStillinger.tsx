import React from "react";
import styled from "styled-components";

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

const StillingPanel = styled.div`
  width: 100%;
  margin: 0.5rem;
  background-color: #ffffff;
  color: #333333;
  padding: 1rem;
`;

export const WebcruiterStillinger = () => {
  return (
    <Style>
      <Tekst>
        <h2>Ledige stillinger</h2>
      </Tekst>
      <StillingPanel>
        <h3>Full stack utvikler</h3>
        <p>Du liker å jobbe med helheten fra back til front.</p>
      </StillingPanel>
      <StillingPanel>
        <h3>Backendutvikler</h3>
        <p>Du har solid kompetanse og brenner for å bygge gode løsninger.</p>
      </StillingPanel>
      <StillingPanel>
        <h3>Frontendutvikler</h3>
        <p>
          Med en fot i kodingens verden og en i den visuelle, lager du løsningene som forenkler den digitale hverdagen
          til folk.
        </p>
      </StillingPanel>
      <StillingPanel>
        <h3>Se alle stillinger i NAV IT</h3>
        <p>
          For å danne team trenger vi designere i ulike varianer, produkeiere og andre fagfelt. Se alle stillinger som
          danner en godt produkt team.
        </p>
      </StillingPanel>
    </Style>
  );
};
