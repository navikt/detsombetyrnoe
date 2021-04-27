import * as React from "react";
import styled from "styled-components/macro";
import VisuallyHidden from "./VisuallyHidden";
import withErrorBoundary from "./withErrorBoundary";

interface Props {
  title: string;
  url: string;
}

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #bbb;
`;

const VideoContainer = styled.figure`
  margin: 2rem 0;
  padding-bottom: 57.25%;
  position: relative;
`;

function Video(props: Props) {
  return (
    <VideoContainer>
      <StyledIframe src={props.url} allowFullScreen frameBorder="0"></StyledIframe>
      <VisuallyHidden>
        <figcaption>{props.title}</figcaption>
      </VisuallyHidden>
    </VideoContainer>
  );
}

export default withErrorBoundary(Video, "Video");
