import * as React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import styled from "styled-components";
import ArtikkelBilde from "./ArtikkelBilde";
import Code from "./Code/Code";
import { navFrontend } from "../styles/navFarger";
import { fontSize, headerStyles } from "../styles/TypografiNyttDesign";
import FilopplastingLenke from "./FilopplastingLenke";
import Lenke from "./Lenke";

const H2 = styled.h2`
  margin-top: calc(2vmin + 2rem);
  margin-bottom: calc(0.2vmin + 0.2rem);
  ${fontSize.s4};
`;

const H3 = styled.h3`
  margin-top: calc(1.5vmin + 1.5rem);
  margin-bottom: calc(0.1vmin + 0.1rem);
  ${fontSize.s5};
`;

const A = styled.a`
  color: ${navFrontend.navBla};
  :visited {
    color: ${navFrontend.navBla};
  }
`;

const UL = styled.ul`
  list-style: disc;
  ul {
    list-style: circle;
  }
`;

const OL = styled.ol`
  list-style: decimal;
`;

const LI = styled.li`
  margin: 0.3rem 0;
  padding-left: 0.3rem;
  line-height: 1.7;
`;

const components: PortableTextComponents = {
  block: {
    h2: H2,
    h3: H3,
    a: A,
  },
  marks: {
    filopplasting: FilopplastingLenke,
    lenke: Lenke,
  },
  types: {
    bilde: ArtikkelBilde,
    code: Code,
  },
  list: {
    bullet: UL,
    number: OL,
  },
  listItem: {
    /* @ts-ignore-line */
    bullet: LI,
  },
};

const StyledDiv = styled.div`
  font-weight: 400;
  ul,
  ol {
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
    ul,
    ol {
      margin-bottom: 0;
    }
    li {
    }
  }
  p {
    line-height: 1.7;
    margin-bottom: 2rem !important;
  }
`;

function BlockContent(props: { blocks: any; className?: string }) {
  return (
    <StyledDiv className={props.className}>
      <PortableText value={props.blocks} components={components} />
    </StyledDiv>
  );
}

export default BlockContent;
