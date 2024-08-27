import * as React from "react";
import styled from "styled-components";
import withErrorBoundary from "../../src/components/withErrorBoundary";
import { FunctionComponent } from "react";

interface Props {
  value: {
    type: string;
    lysTekst: boolean;
    lysBakgrunn: boolean;
    tittel: string;
  };
  icon?: FunctionComponent;
}

const Style = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem 1.5rem;
  border-radius: 0.5rem;
  margin: 0.2rem 0;
  box-shadow: 0 0.1rem 0.2rem #888;
  span:first-letter {
    text-transform: uppercase;
    margin-left: 0.5rem;
  }
`;

function PanelPreview(props: Props) {
  if (!props.value) {
    return null;
  }

  const tittel = props.value.tittel;
  return (
    <Style
      style={{
        backgroundColor: props.value.lysBakgrunn ? "#e9e7e7" : "#32414f",
        color: props.value.lysTekst ? "#FFF" : "#333",
      }}
    >
      {props.icon && <props.icon />}{" "}
      <span>
        {props.value.type}
        {tittel && `: ${tittel}`}
      </span>
    </Style>
  );
}

export default withErrorBoundary(PanelPreview, "PanelPreview");
