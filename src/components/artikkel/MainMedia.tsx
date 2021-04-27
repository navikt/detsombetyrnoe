import styled from "styled-components/macro";
import { ArtikkelI } from "./types";
import { urlFor } from "../../lib/sanity";
import * as React from "react";
import Video from "../Video";

const MainImage = styled.img`
  width: 100%;
  margin-bottom: calc(3rem + 4vmin);
`;

function MainMedia(props: ArtikkelI["bilder"][0]) {
  switch (props._type) {
    case "bilde":
      return <MainImage src={urlFor(props).size(1080, 810).quality(80).format("jpg").url() || ""} />;
    case "video":
      return <Video title={props.title} url={props.url} />;
    default:
      return null;
  }
}

export default MainMedia;
