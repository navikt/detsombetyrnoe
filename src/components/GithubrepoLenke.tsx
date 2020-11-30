import * as React from "react";
import styled from "styled-components";
import GithubIkon from "../ikoner/githubIkon";

const Style = styled.a`
  opacity: 0.8;
  display: inline-flex;
  align-items: center;
  position: absolute;
  right: 1rem;
  top: 1rem;
  color: white;
  transition: 0.2s;
  &:hover,
  &:focus {
    opacity: 1;
    color: white;
    text-decoration: none;
    transform: scale(1.05);
  }
  svg {
    height: 2rem;
    margin-left: 0.5rem;
    color: currentColor;
  }
`;

function GithubrepoLenke() {
  return (
    <Style href="https://github.com/navikt/detsombetyrnoe-next">
      Kode
      <GithubIkon />
    </Style>
  );
}

export default GithubrepoLenke;
