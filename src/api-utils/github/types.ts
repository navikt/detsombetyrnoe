export interface GithubData {
  organization: {
    name: string;
    websiteUrl: string;
    url: string;
    description: string;
    publicRepositories: {
      nodes: Repository[];
      totalCount: number;
    };
  };
}

export interface Repository {
  name: string;
  updatedAt: string;
  pushedAt: string;
  url: string;
  id: string;
  description?: string;
  homepageUrl?: string;
  primaryLanguage: Language;
  defaultBranchRef: {
    target: Commit;
  };
}

export interface Language {
  name: string;
  color: string;
}

export interface Commit {
  message: string;
  additions: number;
  deletions: number;
  history: {
    totalCount: number;
  };
}
