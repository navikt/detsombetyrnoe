import * as React from "react";
// @ts-ignore
import SanityBlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";
import ArtikkelBilde from "./ArtikkelBilde";
import Code from "./Code/Code";
import { navFrontend } from "../styles/navFarger";
import { fontSize, headerStyles } from "../styles/TypografiNyttDesign";

const StyledSanityBlockContent = styled(SanityBlockContent)`
  font-weight: 400;
  p {
    line-height: 1.7;
    margin-bottom: 2rem;
  }
  h2 {
    margin-top: calc(2vmin + 2rem);
    margin-bottom: calc(0.35vmin + 0.35rem);
    ${fontSize.h4};
  }
  h3 {
    margin-top: calc(1.5vmin + 1.5rem);
    margin-bottom: calc(0.25vmin + 0.25rem);
    ${fontSize.h5};
  }
  a,
  a:visited {
    color: ${navFrontend.navBla};
  }
  ul,
  ol {
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
    ul,
    ol {
      margin-bottom: 0;
    }
    li {
      margin: 0.3rem 0;
      padding-left: 0.3rem;
      line-height: 1.7;
    }
  }
  ul {
    list-style: disc;
    ul {
      list-style: circle;
    }
  }
  ol {
    list-style: decimal;
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
