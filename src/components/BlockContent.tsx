import * as React from "react";
// @ts-ignore
import SanityBlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";
import ArtikkelBilde from "./ArtikkelBilde";
import Code from "./Code/Code";
import { navFrontend } from "../styles/navFarger";

const StyledSanityBlockContent = styled(SanityBlockContent)`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  a,
  a:visited {
    color: ${navFrontend.navBla};
  }
`;

const serializers = {
  types: {
    bilde: ArtikkelBilde,
    code: Code,
  },
};

function BlockContent(props: { blocks: any; className?: string }) {
  return <StyledSanityBlockContent className={props.className} blocks={props.blocks} serializers={serializers} />;
}

export default BlockContent;
