import styled from "styled-components";
import React from "react";

const Style = styled.div`
  iframe {
    height: 100%;
    width: 100%;
  }
  height: calc(100% - 2rem);
  margin: 1rem;
  box-shadow: 0 0 1rem #888;
`;

export function WebPreviewWrapper(props: { url: string }) {
  return (
    <Style>
      <iframe src={props.url} frameBorder={0} />
    </Style>
  );
}
