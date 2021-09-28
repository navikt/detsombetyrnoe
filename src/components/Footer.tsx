import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { lysTekst, mørkTekst } from "./Panel";

const StyledFooter = styled.footer<{ backgroundColor: string; lysTekst: boolean }>`
  --background-color: ${(props) => props.backgroundColor};
  background-color: var(--background-color);
  ${(props) => (props.lysTekst ? lysTekst : mørkTekst)};
  padding: 1rem;
`;

export const Footer = (props: { tittel: string; slug: string; backgroundColor?: string; lysTekst?: boolean }) => {
  return (
    <StyledFooter backgroundColor={props.backgroundColor || "white"} lysTekst={!!props.lysTekst}>
      <Link href={props.slug}>
        <a>{props.tittel}</a>
      </Link>
    </StyledFooter>
  );
};
