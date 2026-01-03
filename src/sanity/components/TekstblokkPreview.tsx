import * as React from "react";
import styled from "styled-components";
import withErrorBoundary from "../../components/withErrorBoundary";

interface Props {
  value: {
    bakgrunnsfarge: string;
    overskrift: string;
  };
  icon?: React.ReactElement;
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

  const tittel = props.value.overskrift;
  return (
    <Style style={{ backgroundColor: props.value.bakgrunnsfarge }}>
      Tekstblokk: <span>{tittel && `: ${tittel}`}</span>
    </Style>
  );
}

export default withErrorBoundary(PanelPreview, "PanelPreview");
