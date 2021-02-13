import { useEffect, useState } from "react";
import handleViewport from "react-in-viewport";
import { useAmplitude } from "../contexts/amplitude-context";
import styled from "styled-components";

const Style = styled.li`
  margin: 2rem 0;
  a {
    padding: 2vmin;
    display: block;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
      box-shadow: 0 0 0.5rem #888;
      transform: scale(1.02);
    }
  }
  p {
    margin-top: 1rem;
    color: #333;
    max-height: 10rem;
    overflow: hidden;
    padding-bottom: 1rem;
  }
  i {
    color: #333;
  }
  position: relative;
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

const Stilling = (props: any) => {
  const [harVistStilling, setHarVistStilling] = useState(false);
  const { logAmplitudeEvent } = useAmplitude();
  const { frist, url, title, description } = props;

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
    <Style>
      <a href={url} ref={props.forwardedRef} onClick={handleClick} target="_blank">
        <i>Frist: {frist}</i>
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </Style>
  );
};

const StillingMedViewportSjekk = handleViewport(Stilling);

export default StillingMedViewportSjekk;
