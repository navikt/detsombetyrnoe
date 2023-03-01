import * as React from "react";
import styled from "styled-components";
import { navFrontend } from "../../styles/navFarger";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import { codeHighLightStyle } from "./CodeHighLightStyle";
import { useMount } from "react-use";
import { useRef } from "react";

const Style = styled.div`
  background: #222;
  color: white;
  border-radius: 0.2rem;
  overflow: hidden;
  && {
    margin: 3rem auto;
    max-width: calc(var(--content-max-width) * 1.3);
  }
  font-size: 0.9rem;
  ${codeHighLightStyle};
`;

const LanguageStyle = styled.div`
  padding: 0.2rem 1rem;
  background: linear-gradient(90deg, ${navFrontend.navDypBlaDarken60}, ${navFrontend.navDypBlaDarken80});
`;

const StyledPre = styled.pre`
  overflow-x: auto;
  tab-width: 4;
  padding: 1rem;
`;

interface Props {
  value: {
    code: string;
    highlightedLines: number[];
    language: string;
    _key: string;
    _type: "code";
  };
}

function Code(props: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useMount(() => Prism.highlightElement(ref.current as Element));

  const language = props.value.language;

  return (
    <Style>
      <LanguageStyle>{language}</LanguageStyle>
      <StyledPre>
        <code ref={ref} className={"language-" + language}>
          {props.value.code}
        </code>
      </StyledPre>
    </Style>
  );
}

export default Code;
