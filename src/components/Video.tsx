import * as React from "react";
import styled from "styled-components";
import VisuallyHidden from "./VisuallyHidden";
import withErrorBoundary from "./withErrorBoundary";

interface Props {
  title: string;
  url: string;
}

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  //position: absolute;
  //top: 0;
  //left: 0;
  /*background-color: #bbb;*/
`;

const VideoContainer = styled.figure`
  margin: 2rem 0;
  height: 100%;
  padding-bottom: 20%;
  //position: relative;
`;

function Video(props: Props) {
  return (
    <VideoContainer>
      <StyledIframe title={props.title} src={props.url} allowFullScreen frameBorder="0"></StyledIframe>
      <VisuallyHidden>
        <figcaption>{props.title}</figcaption>
      </VisuallyHidden>
    </VideoContainer>
  );
}

export default withErrorBoundary(Video, "Video");
