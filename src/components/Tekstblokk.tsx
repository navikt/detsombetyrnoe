import * as React from "react";
import { forwardRef, RefObject } from "react";
import styled, { css } from "styled-components";
import BlockContent from "./BlockContent";
import { cssVars } from "../styles/cssVars";

interface Props {
  backgroundColor?: string;
  lysTekst?: boolean;
  overskrift: string;
  tekst: any;
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
    max-width: var(${cssVars.contentMaxWidth});
    margin-left: auto;
    margin-right: auto;
  }

  margin-bottom: calc(5rem + 5vmin);
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
  /*> * {
    max-width: 100%;
  }*/
`;

const Tekstblokk = (props: Props) => (
  <Style
    backgroundColor={props.backgroundColor || "white"}
    lysTekst={!!props.lysTekst}
    id={props.id}
    className={props.className}
    ref={props.forwardRef}
  >
    <div>
      <h2>{props.overskrift}</h2>
      <StyledBlockContent blocks={props.tekst} />
    </div>
  </Style>
);

export default Tekstblokk;
