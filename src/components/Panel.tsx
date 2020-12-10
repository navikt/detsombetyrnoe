import * as React from "react";
import styled from "styled-components";
import { ReactNode } from "react";

interface Props {
  backgroundColor?: string;
  fontColor?: string;
  children: ReactNode;
}

const Style = styled.div<{ backgroundColor: string; fontColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  min-height: 100vh;
  padding: 20vmin 5vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 100vw;
`;

function Panel(props: Props) {
  return (
    <Style backgroundColor={props.backgroundColor || "white"} fontColor={props.fontColor || "black"}>
      <Content>{props.children}</Content>
    </Style>
  );
}

export default Panel;
