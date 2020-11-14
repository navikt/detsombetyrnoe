import * as React from "react";
import styled from "styled-components";
import { GetStaticProps } from "next";
import { serverUrl } from "../utils/serverUrl";
import { Github } from "../types/github";
import Repositories from "../components/githubstats/Repositories";
import Head from "next/head";
import { navFrontend } from "../styles/navFarger";
import GithubHeader from "../components/githubstats/GithubHeader";
import { ResetCSS } from "../styles/reset.css";
import { GlobalStyle } from "../styles/GlobalStyle";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${serverUrl}/api/github`);
  const data = await res.json();

  return {
    props: data,
    revalidate: 60,
  };
};

const Style = styled.div`
  font-family: "Comfortaa", sans-serif;

  background-color: ${navFrontend.navGronnDarken60};
  color: white;
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  > * {
    flex-grow: 1;
    margin: 0.5rem;
    background-color: rgba(0, 0, 0, 0.15);
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function Githubstats(props: Github) {
  return (
    <Style>
      <GlobalStyle />
      <ResetCSS />
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500&display=swap" rel="stylesheet" />
      </Head>
      <GithubHeader github={props} />
      <Repositories repos={props.organization.publicRepositories.nodes} />
    </Style>
  );
}

export default Githubstats;
