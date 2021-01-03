import * as React from "react";
import styled from "styled-components";
import withErrorBoundary from "../../../src/components/withErrorBoundary";

interface Props {
  value: {
    bakgrunnsfarge: string;
    type: string;
    lysTekst: boolean;
    title: string;
  };
}

const Style = styled.div`
  padding: 0.7rem 1.5rem;
  border-radius: 0.5rem;
  margin: 0.2rem 0;
  &:first-letter {
    text-transform: uppercase;
  }
`;

function PanelPreview(props: Props) {
  if (!props.value) {
    return null;
  }

  return (
    <Style style={{ backgroundColor: props.value.bakgrunnsfarge, color: props.value.lysTekst ? "#FFF" : "#333" }}>
      {props.value.title || props.value.type}
    </Style>
  );
}

export default withErrorBoundary(PanelPreview, "PanelPreview");
