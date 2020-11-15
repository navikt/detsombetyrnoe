import * as React from "react";
import { GetStaticProps } from "next";
import { serverUrl } from "../utils/serverUrl";
import { GithubData } from "../types/githubData";
import Head from "next/head";
import { ResetCSS } from "../styles/reset.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import { loggError } from "../utils/logger";
import GithubstatsView from "../components/githubstats/GithubstatsView";
import styled from "styled-components";
import { navFrontend } from "../styles/navFarger";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${serverUrl}/api/github`);
  if (!res.ok) {
    return {
      props: { error: res.statusText },
      revalidate: 30,
    };
  }

  const data = await res.json();
  return {
    props: { data },
    revalidate: 60,
  };
};

const ErrorLoadingStyle = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 20rem;
  background-color: ${navFrontend.navBla};
  font-size: 1.3;
`;

function Githubstats(props: { data?: GithubData; error: Error }) {
  if (props.error) {
    loggError(props.error);
    return <ErrorLoadingStyle>Kunne ikke hente github-data</ErrorLoadingStyle>;
  }

  if (!props.data) {
    return <ErrorLoadingStyle>Loading..</ErrorLoadingStyle>;
  }

  return (
    <>
      <GlobalStyle />
      <ResetCSS />
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500&display=swap" rel="stylesheet" />
      </Head>
      <GithubstatsView {...props.data} />
    </>
  );
}

export default Githubstats;
