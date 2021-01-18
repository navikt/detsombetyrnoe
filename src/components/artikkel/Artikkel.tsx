import * as React from "react";
import styled from "styled-components/macro";
import { ArtikkelI } from "./types";
import Error from "next/error";
import { urlFor } from "../../lib/sanity";
import BlockContent from "../BlockContent";

interface Props {
  data: ArtikkelI;
}

const Style = styled.article``;

const contentMaxWidth = "60ch";
const layoutWidth = "50rem";

const Heading = styled.div`
  position: relative;
  padding: 4rem;
  width: ${layoutWidth};
  max-width: 100vw;
  margin: auto;
  min-height: 50vh;
  background: #aaa no-repeat;
  background-size: cover;
  h1 {
    position: absolute;
    bottom: 2rem;
    color: white;
    font-size: 3rem;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40%;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
  }
`;

const IngressStyle = styled.p`
  width: ${layoutWidth};
  max-width: 100vw;
  margin: auto;
  padding: 2rem;
  font-size: 1.1rem;
  background-color: #eee;
`;

const ContentStyle = styled.div`
  background-color: white;
  width: ${layoutWidth};
  max-width: 100vw;
  margin: auto;
  padding: 4rem 2rem 6rem;
  > * {
    max-width: ${contentMaxWidth};
  }
`;

function Artikkel(props: Props) {
  const artikkel = props.data;

  if (!artikkel) {
    return <Error statusCode={404} />;
  }

  const coverImage = urlFor(artikkel.bilder[0]).width(800).url();

  return (
    <Style>
      <Heading style={{ backgroundImage: `url("${coverImage}")` }}>
        <h1>{artikkel.tittel}</h1>
      </Heading>
      <IngressStyle>{artikkel.ingress}</IngressStyle>
      <ContentStyle>
        <BlockContent blocks={artikkel.innhold} />
      </ContentStyle>
    </Style>
  );
}

export default Artikkel;
