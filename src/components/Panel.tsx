import * as React from "react";
import styled from "styled-components";
import { ReactNode } from "react";
import Spinner from "./Spinner";

interface Props {
  backgroundColor?: string;
  fontColor?: string;
  children: ReactNode;
  spinner?: boolean;
  className?: string;
  tag?: "a" | "ul" | "ol";
}

const Style = styled.div<{ backgroundColor: string; fontColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
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
    <Style backgroundColor={props.backgroundColor || "white"} fontColor={props.fontColor || "black"}>
      {props.spinner ? <Spinner /> : props.children}
    </Style>
  );
}

export default Panel;
