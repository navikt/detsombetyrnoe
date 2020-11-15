import * as React from "react";
import { Repository } from "../../types/githubData";
import { format } from "date-fns";
import { nb } from "date-fns/locale";
import styled, { keyframes } from "styled-components";

const Style = styled.ol`
  align-items: stretch !important;
  max-width: calc(100% - 1rem);
  overflow: hidden;
`;

const animation = keyframes`
  from {
  opacity: 0;
    transform: translateX(2rem);
  }
`;

const RepoStyle = styled.li<{ index: number }>`
  animation: ${animation} 0.5s backwards ${(props) => props.index / 6}s;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  &:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.1);
  }
  > * {
    padding: 1rem;
    word-break: break-word;
    &:not(:last-child) {
      margin-right: 0.25rem;
    }
    &:nth-child(1) {
      flex: 16ch 0 0;
    }
    &:nth-child(2) {
      flex: 24ch 0 0;
    }
  }
`;

const Lenke = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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

const Message = styled.p.attrs((props) => ({ title: props.children }))`
  font-size: 0.8rem;
  font-weight: 300;
  opacity: 0.9;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  @media (max-width: 80ch) {
    display: none;
  }
  &:last-child {
    font-style: italic;
  }
`;

const TextWrapper = styled.div`
  overflow: hidden;
  > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

function Repo(props: { repo: Repository; index: number }) {
  const { repo, index } = props;
  const updatedAt = format(new Date(repo.updatedAt), "d MMM p", { locale: nb });
  return (
    <RepoStyle index={index}>
      <Timestamp>{updatedAt}</Timestamp>
      <Lenke href={repo.url}>{repo.name}</Lenke>
      {repo.homepageUrl && (
        <Lenke aria-label={`Gå til ${repo.name} sin hjemmeside`} href={repo.homepageUrl}>
          🚀
        </Lenke>
      )}
      <TextWrapper>
        <Message>{repo.description}</Message>
        <Message>{repo.defaultBranchRef.target.message}</Message>
      </TextWrapper>
    </RepoStyle>
  );
}

function Repositories(props: { repos: Repository[] }) {
  return (
    <Style>
      <Header>Siste aktivitet:</Header>
      {props.repos?.map((repo, i) => (
        <Repo key={repo.id} repo={repo} index={i} />
      ))}
    </Style>
  );
}

export default Repositories;
