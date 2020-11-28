import * as React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { ResetCSS } from "../styles/reset.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import { loggError } from "../utils/logger";
import GithubstatsView from "../components/githubstats/GithubstatsView";
import styled from "styled-components";
import { navFrontend } from "../styles/navFarger";
import useSWR from "swr";

const Style = styled.div`
  font-family: "Comfortaa", sans-serif;
  margin: 1rem 0;
`;

const ErrorLoadingStyle = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 20rem;
  background-color: ${navFrontend.navBlaDarken60};
  font-size: 1.3rem;
`;

const fetcher = (url) => fetch(url).then((r) => r.json());

function Githubstats() {
  const { data, error } = useSWR("/api/github", fetcher);

  if (error) {
    loggError(error);
    return <ErrorLoadingStyle>Kunne ikke hente github-data</ErrorLoadingStyle>;
  }

  if (!data) {
    return <ErrorLoadingStyle>Loading..</ErrorLoadingStyle>;
  }

  return (
    <Style>
      <GlobalStyle />
      <ResetCSS />
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500&display=swap" rel="stylesheet" />
      </Head>
      <GithubstatsView {...data} />
    </Style>
  );
}

export default Githubstats;
