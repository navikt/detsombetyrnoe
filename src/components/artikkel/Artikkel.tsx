"use client";
import * as React from "react";
import styled from "styled-components";
import { ArtikkelI } from "./types";
import Error from "next/error";
import BlockContent from "../BlockContent";
import { cssVars } from "../../styles/cssVars";
import MainMedia from "./MainMedia";
import { ArtikkelLayout } from "./ArtkkelLayout";

interface Props {
  data: ArtikkelI;
}

const StyledBlockContent = styled(BlockContent)`
  > * {
    width: 100%;
    max-width: var(${cssVars.contentMaxWidth});
    margin-left: auto;
    margin-right: auto;
  }

  margin-bottom: calc(5rem + 5vmin);
`;

function Artikkel(props: Props) {
  const artikkel = props.data;

  if (!artikkel) {
    return <Error statusCode={404} />;
  }

  const coverMedia = artikkel.bilder?.[0];

  return (
    <ArtikkelLayout
      tittel={artikkel.tittel}
      undertittel={artikkel.undertittel}
      ingress={artikkel.ingress}
      slug={artikkel.slug.current}
    >
      <MainMedia {...coverMedia} />
      <StyledBlockContent blocks={artikkel.innhold} />
    </ArtikkelLayout>
  );
}

export default Artikkel;
