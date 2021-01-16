import * as React from "react";
// @ts-ignore
import SanityBlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";
import ArtikkelBilde from "./ArtikkelBilde";

const StyledSanityBlockContent = styled(SanityBlockContent)`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }
`;

const serializers = {
  types: {
    bilde: ArtikkelBilde,
  },
};

function BlockContent(props: { blocks: any; className?: string }) {
  return <StyledSanityBlockContent className={props.className} blocks={props.blocks} serializers={serializers} />;
}

export default BlockContent;
