import * as React from "react";
import { Repository } from "../../types/github";
import { format } from "date-fns";
import { nb } from "date-fns/locale";
import styled from "styled-components";

const Style = styled.ol`
  align-items: stretch !important;
  max-width: 100%;
`;

const Repo = styled.li`
  &:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const RepoLenke = styled.a`
  display: flex;
  align-items: center;
  > * {
    padding: 1rem;
  }
  > *:not(:last-child) {
    margin-right: 0.25rem;
  }
  padding: 0 1rem;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  > *:nth-child(1) {
    flex: 16ch 0 0;
  }
  > *:nth-child(2) {
    flex: 20ch 0 0;
  }
`;

const Header = styled.h4`
  padding: 1rem;
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
`;

const Timestamp = styled.p`
  opacity: 0.7;
`;

const Message = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  opacity: 0.9;

  @media (max-width: 80ch) {
    display: none;
  }
`;

function Repositories(props: { repos: Repository[] }) {
  return (
    <Style>
      <Header>Siste aktivitet:</Header>
      {props.repos?.map((repo) => (
        <Repo key={repo.id}>
          <RepoLenke href={repo.url}>
            <Timestamp>{format(new Date(repo.updatedAt), "d MMM p", { locale: nb })}</Timestamp>
            <p>{repo.name}</p>
            <Message>{repo.defaultBranchRef.target.message}</Message>
          </RepoLenke>
        </Repo>
      ))}
    </Style>
  );
}

export default Repositories;
