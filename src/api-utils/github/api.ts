import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { gql } from "@apollo/client/core";
import { GithubData } from "./types";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const token = process.env.GITHUB_API_TOKEN;
const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: token ? `Bearer ${token}` : undefined,
  },
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const query = gql`
  fragment Repo on RepositoryConnection {
    nodes {
      name
      updatedAt
      pushedAt
      url
      id
      description
      homepageUrl
      primaryLanguage {
        name
        color
      }
      defaultBranchRef {
        target {
          ... on Commit {
            message
            additions
            deletions
            history {
              totalCount
            }
          }
        }
      }
    }
  }

  query OrgQuery {
    organization(login: "navikt") {
      name
      websiteUrl
      url
      description
      publicRepositories: repositories(first: 10, orderBy: { field: UPDATED_AT, direction: DESC }, privacy: PUBLIC) {
        ...Repo
        totalCount
      }
    }
  }
`;

export const fetchGithubData = () => client.query<GithubData>({ query });
