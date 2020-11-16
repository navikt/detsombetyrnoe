import * as React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { ResetCSS } from "../styles/reset.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import { loggError } from "../utils/logger";
import GithubstatsView from "../components/githubstats/GithubstatsView";
import styled from "styled-components";
import { navFrontend } from "../styles/navFarger";
import { GithubData } from "../api-utils/github/types";
import { fetchGithubData } from "../api-utils/github/api";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await fetchGithubData();
    return {
      props: { data },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: { error: e.message },
      revalidate: 30,
    };
  }
};

const Style = styled.div`
  font-family: "Comfortaa", sans-serif;
`;

const ErrorLoadingStyle = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 20rem;
  background-color: ${navFrontend.navBla};
  font-size: 1.3rem;
`;

function Githubstats(props: { data?: GithubData; error?: Error }) {
  if (props.error) {
    loggError(props.error);
    return <ErrorLoadingStyle>Kunne ikke hente github-data</ErrorLoadingStyle>;
  }

  if (!props.data) {
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
      <GithubstatsView {...props.data} />
    </Style>
  );
}

export default Githubstats;
