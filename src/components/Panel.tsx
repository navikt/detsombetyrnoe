import * as React from "react";
import styled, { css } from "styled-components";
import { ReactNode } from "react";
import Spinner from "./Spinner";

interface Props {
  backgroundColor?: string;
  lysTekst?: boolean;
  children: ReactNode;
  spinner?: boolean;
  className?: string;
  id?: string;
}

const lysTekst = css`
  color: white;
  a {
    color: #eee;
  }
  a:hover,
  a:active {
    color: white;
  }
`;

const mørkTekst = css`
  color: #333;
`;

const Style = styled.div<{ backgroundColor: string; lysTekst: boolean }>`
  background-color: ${(props) => props.backgroundColor};
  ${(props) => (props.lysTekst ? lysTekst : mørkTekst)};
  min-height: 110vh;
  padding: 20vmin 5vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  > * {
    max-width: 100%;
  }
`;

function Panel(props: Props) {
  return (
    <Style
      backgroundColor={props.backgroundColor || "white"}
      lysTekst={!!props.lysTekst}
      id={props.id}
      className={props.className}
    >
      {props.spinner ? <Spinner /> : props.children}
    </Style>
  );
}

export default Panel;
