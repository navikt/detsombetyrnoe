import { useEffect, useState } from "react";
import handleViewport from "react-in-viewport";
import { useAmplitude } from "../contexts/amplitude-context";
import styled from "styled-components";
import parse from "html-react-parser";
import { CardItem } from "./CardItem";

const StyledCardItem = styled(CardItem)`
  &::after {
    position: absolute;
    bottom: 0;
    content: "";
    height: 3rem;
    width: 100%;
    display: block;
    background: linear-gradient(transparent, var(--background-color) 60%);
  }
`;

const P = styled.p`
  margin-top: 1rem;
  color: #333;
  max-height: 10rem;
  overflow: hidden;
  padding-bottom: 1rem;
`;

const Stilling = (props: any) => {
  const [harVistStilling, setHarVistStilling] = useState(false);
  const { logAmplitudeEvent } = useAmplitude();
  const { frist, url, title, description, jobTitle } = props;

  if (props.inViewport && !harVistStilling) {
    setHarVistStilling(true);
  }

  const handleClick = (event: any) => {
    event.preventDefault();
    logAmplitudeEvent("Går til stilling", {
      title,
      url,
    });
    window.location.assign(url);
  };

  useEffect(() => {
    if (harVistStilling) {
      logAmplitudeEvent("Viser stilling", {
        title,
        url,
      });
    }
  }, [harVistStilling]);

  if (!url) return null;

  return (
    <StyledCardItem>
      <i>
        {jobTitle ? `Stilling: ${jobTitle}, ` : ""}Frist: {frist}
      </i>
      <h3>
        <a href={url} ref={props.forwardedRef} onClick={handleClick} target="_blank">
          {title.replace(/\s+/g, " ").trim()}
        </a>
      </h3>
      <P>{parse(description.trim())}</P>
    </StyledCardItem>
  );
};

const StillingMedViewportSjekk = handleViewport(Stilling);

export default StillingMedViewportSjekk;
