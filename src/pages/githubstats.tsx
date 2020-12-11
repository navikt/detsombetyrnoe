import * as React from "react";
import { ResetCSS } from "../styles/reset.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import { loggError } from "../utils/logger";
import GithubstatsView from "../components/githubstats/GithubstatsView";
import styled from "styled-components";
import { navFrontend } from "../styles/navFarger";
import useSWR from "swr";

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

  return <GithubstatsView {...data} />;
}

export default Githubstats;
