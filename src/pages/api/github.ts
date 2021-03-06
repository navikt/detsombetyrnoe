import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { gql } from "@apollo/client/core";
import { NextApiHandler } from "next";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const token = process.env.API_GITHUB_TOKEN;
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
            commitUrl
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
      publicRepositories: repositories(first: 15, orderBy: { field: UPDATED_AT, direction: DESC }, privacy: PUBLIC) {
        ...Repo
        totalCount
      }
    }
  }
`;

const apiHandler: NextApiHandler = async (request, response) => {
  try {
    const data = await client.query({ query });
    response.status(200).json(data.data);
  } catch (error) {
    response.status(500).json("Det skjedde en feil: " + JSON.stringify(error));
  }
};

export default apiHandler;
