import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { lysTekst, mørkTekst } from "./Panel";

const StyledFooter = styled.footer<{ backgroundColor: string; lysTekst: boolean }>`
  --background-color: ${(props) => props.backgroundColor};
  background-color: var(--background-color);
  ${(props) => (props.lysTekst ? lysTekst : mørkTekst)};
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Footer = (props: { tittel: string; slug: string; backgroundColor?: string; lysTekst?: boolean }) => {
  return (
    <StyledFooter backgroundColor={props.backgroundColor || "white"} lysTekst={!!props.lysTekst}>
      <Link href={props.slug}>{props.tittel}</Link>
      <span aria-hidden={true}>|</span>
      <a href="https://uustatus.no/nb/erklaringer/publisert/4e19bda2-a2b9-4a4f-864a-cf7fcbf5ea06">
        Tilgjengelighetserklæring
      </a>
    </StyledFooter>
  );
};
