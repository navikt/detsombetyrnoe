import * as React from "react";
import { format } from "date-fns";
import { nb } from "date-fns/locale";
import styled, { css, keyframes } from "styled-components";
import { Repository } from "../../api-utils/github/types";
import useInViewport from "../../utils/useInViewport";
import { useRef } from "react";

const Style = styled.ol`
  align-items: stretch !important;
  max-width: calc(100% - 2vmin);
  overflow: hidden;
`;

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateX(1rem);
  }
`;

const RepoStyle = styled.li<{ index: number; inVeiwport: boolean }>`
  animation: ${animation} 0.2s backwards ${(props) => props.index / 10 + 0.5}s;
  animation-play-state: ${(props) => (props.inVeiwport ? "running" : "paused")};
  display: flex;
  align-items: center;
  padding: 0 2vmin;
  &:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.1);
  }
  > * {
    padding: 0.75rem 0.25rem;
    word-break: break-word;
    &:not(:last-child) {
      margin-right: 0.25vmin;
    }
    &:nth-child(1) {
      flex: 13ch 0 0;
    }
    &:nth-child(2) {
      flex: 24ch 0 0;
    }
  }
`;

const lenkeStyle = css`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const RepoLenke = styled.a`
  ${lenkeStyle};
`;

const HjemmesideLenke = styled.a`
  ${lenkeStyle};
  min-width: 3rem;
  text-align: center;
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

const Description = styled.p.attrs((props) => ({ title: props.children }))`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CommitMessage = styled(Description).attrs({ as: "a" })`
  font-style: italic;
  ${lenkeStyle};
`;

const TextWrapper = styled.div`
  font-size: 0.8rem;
  overflow: hidden;
  > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  @media (max-width: 80ch) {
    display: none;
  }
`;

function Repo(props: { repo: Repository; index: number; inVeiwport: boolean }) {
  const { repo, index } = props;
  const updatedAt = format(new Date(repo.updatedAt), "d MMM p", { locale: nb });
  const lastCommit = repo.defaultBranchRef.target;
  return (
    <RepoStyle index={index} inVeiwport={props.inVeiwport}>
      <Timestamp>{updatedAt}</Timestamp>
      <RepoLenke href={repo.url}>{repo.name}</RepoLenke>
      {repo.homepageUrl && (
        <HjemmesideLenke aria-label={`Gå til ${repo.name} sin hjemmeside`} href={repo.homepageUrl}>
          🚀
        </HjemmesideLenke>
      )}
      <TextWrapper>
        {repo.description && <Description>{repo.description}</Description>}
        <CommitMessage href={lastCommit.commitUrl}>{lastCommit.message}</CommitMessage>
      </TextWrapper>
    </RepoStyle>
  );
}

function Repositories(props: { repos: Repository[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const inViewport = useInViewport(ref);
  return (
    <Style ref={ref}>
      <Header>Siste aktivitet:</Header>
      {props.repos?.map((repo, i) => (
        <Repo key={repo.id} repo={repo} index={i} inVeiwport={inViewport} />
      ))}
    </Style>
  );
}

export default Repositories;
