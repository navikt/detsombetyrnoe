import * as React from "react";
import styled from "styled-components/macro";
import { ArtikkelI } from "./types";
import Error from "next/error";
import { urlFor } from "../../lib/sanity";
import BlockContent from "../BlockContent";
import Head from "next/head";
import { cssVars } from "../../styles/cssVars";
import { fontSize } from "../../styles/TypografiNyttDesign";
import Topplinje from "./Topplinje";

interface Props {
  data: ArtikkelI;
}

const Style = styled.main`
  min-height: 100vh;
  padding: 4vmin 4vmin 30vmin;
  ${cssVars.contentMaxWidth}: 30rem;
  ${cssVars.layoutMaxWidth}: 50rem;
  max-width: var(${cssVars.layoutMaxWidth});
  margin: 0 auto;
  > * {
    margin-left: auto;
    margin-right: auto;
  }
`;

const MainImage = styled.img`
  width: 100%;
  margin-bottom: calc(3rem + 4vmin);
`;

const H1 = styled.h1`
  margin-top: calc(2rem + 3vmin);
  margin-bottom: calc(1.5rem + 2vmin);
  ${fontSize.s2}
`;

const Ingress = styled.p`
  width: 100%;
  max-width: var(${cssVars.contentMaxWidth});
  font-size: 1.1rem;
  margin-bottom: calc(2rem + 3vmin);
`;

const StyledBlockContent = styled(BlockContent)`
  > * {
    width: 100%;
    max-width: var(${cssVars.contentMaxWidth});
    margin-left: auto;
    margin-right: auto;
  }
`;

function Artikkel(props: Props) {
  const artikkel = props.data;

  if (!artikkel) {
    return <Error statusCode={404} />;
  }

  const coverImage = artikkel.bilder?.[0];

  return (
    <Style>
      <Head>
        <title>{artikkel.tittel}</title>
      </Head>
      <Topplinje />
      <H1>{artikkel.tittel}</H1>
      <Ingress>{artikkel.ingress}</Ingress>
      {coverImage && <MainImage src={urlFor(coverImage).size(1080, 810).quality(80).format("jpg").url() || ""} />}
      <StyledBlockContent blocks={artikkel.innhold} />
    </Style>
  );
}

export default Artikkel;
