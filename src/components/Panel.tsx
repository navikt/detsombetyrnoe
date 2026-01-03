import { ReactNode, RefObject } from "react";
import styled, { css } from "styled-components";

interface Props {
  lysBakgrunn?: boolean;
  lysTekst?: boolean;
  children: ReactNode;
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

const Panel = (props: Props) => (
  <Style
    backgroundColor={props.lysBakgrunn ? "#e9e7e7" : "#32414f"}
    lysTekst={!!props.lysTekst}
    id={props.id}
    className={props.className}
    ref={props.forwardRef}
  >
    {props.children}
  </Style>
);

export default Panel;
