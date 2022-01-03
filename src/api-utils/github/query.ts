import { gql } from "@apollo/client/core";

export const query = gql`
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
