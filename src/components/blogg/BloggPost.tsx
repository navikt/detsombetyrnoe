"use client";
import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Forfattere from "./Forfattere";
import { urlFor } from "../../lib/sanity";
import BlockContent from "../BlockContent";
import Head from "next/head";
import { formatterDato } from "../../utils/formatterDato";
import { useAmplitude } from "../../contexts/amplitude-context";
import { useMount } from "react-use";
import { BlogpostData } from "src/lib/services/sanity/model/blogg/bloggQuery";

const Style = styled.div`
  min-height: 100vh;
  padding: 4vmin 4vmin 30vmin;
  --content-max-width: 30rem;
`;

const Content = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  h1 {
    font-size: calc(1rem + 10vmin);
    font-weight: 600;
    line-height: 1;
    margin: 4rem 0 1rem;
  }
`;

const StyledForfattere = styled(Forfattere)`
  margin-left: 0.2rem;
`;

const MainImage = styled.img`
  width: 100%;
  margin: 2rem 0;
`;

const PublishedDate = styled.div`
  max-width: var(--content-max-width);
  margin: 0 auto;
  margin-bottom: 2rem;
  font-family: monospace;
`;

const StyledBlockContent = styled(BlockContent)`
  > * {
    max-width: var(--content-max-width);
    margin: 0 auto;
  }
`;

const Bloggside = (props: BlogpostData) => {
  const { logAmplitudeEvent } = useAmplitude();

  useMount(() =>
    logAmplitudeEvent("Bloggpost - pageview", {
      tittel: props.tittel,
      forfatter: props.forfattere?.map((it) => it.navn),
      slug: props.slug,
    })
  );

  return (
    <Style lang={props.language}>
      <Head>
        <title>{props.tittel}</title>
      </Head>
      <Content>
        <Header fontSize=".75rem" />
        <h1>{props.tittel}</h1>
        <StyledForfattere forfattere={props.forfattere} lenkeTilForfatterside={true} />
        {props.mainImage && (
          <MainImage
            src={urlFor(props.mainImage).width(1080).height(540).bg("fff").format("jpg").url() || ""}
            alt={props.mainImage?.altTekst}
          />
        )}
        <PublishedDate>{formatterDato(props._createdAt)}</PublishedDate>
        <StyledBlockContent blocks={props.body} />
      </Content>
    </Style>
  );
};

export default Bloggside;
