import * as React from "react";
import { forwardRef, RefObject } from "react";
import styled, { css } from "styled-components";
import BlockContent from "./BlockContent";
import { cssVars } from "../styles/cssVars";
import { ArtikkelI } from "./artikkel/types";
import Link from "next/link";

interface Props {
  backgroundColor?: string;
  lysTekst?: boolean;
  overskrift: string;
  tekst: any;
  artikkel?: ArtikkelI;
  className?: string;
  id?: string;
  forwardRef?: RefObject<HTMLDivElement>;
}

export const lysTekst = css`
  color: white;
  a {
    color: #eee;
  }
  a:hover,
  a:active {
    color: white;
  }
`;

export const mørkTekst = css`
  color: #333;
`;

const StyledBlockContent = styled(BlockContent)`
  > * {
    width: 100%;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
  }

  margin-bottom: calc(5rem + 5vmin);

  figure {
    width: 80%;
  }
`;

const Style = styled.div<{ backgroundColor: string; lysTekst: boolean }>`
  --background-color: ${(props) => props.backgroundColor};
  background-color: var(--background-color);
  ${(props) => (props.lysTekst ? lysTekst : mørkTekst)};
  min-height: 110vh;
  padding: 20vmin 5vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  max-width: 50rem;
  margin: 0 auto;

  h2 {
    margin-bottom: 1rem;
  }
`;

const Tekstblokk = (props: Props) => (
  <Style
    backgroundColor={props.backgroundColor || "white"}
    lysTekst={!!props.lysTekst}
    id={props.id}
    className={props.className}
    ref={props.forwardRef}
  >
    <Content>
      <h2>{props.overskrift}</h2>
      <StyledBlockContent blocks={props.tekst} />
      {props.artikkel && <Link href={`/${props.artikkel.slug.current}`}>{props.artikkel.lesMerTekst}</Link>}
    </Content>
  </Style>
);

export default Tekstblokk;
