import type { IRepo, IRepoCommit, IRepoLanguages } from "../interfaces";
import { create } from "zustand";

interface ReposStore {
  repos: IRepo[];

  setRepos: (repos: IRepo[]) => void;

  repo: IRepo | null;

  setRepo: (repo: IRepo | null) => void;

  repoCommits: IRepoCommit[];

  setRepoCommits: (repoCommits: IRepoCommit[]) => void;

  repoLanguages: IRepoLanguages | null;

  setRepoLanguages: (repoLanguages: IRepoLanguages | null) => void;
}

export const useReposStore = create<ReposStore>((set) => ({
  repos: [],

  setRepos: (repos) => set({ repos }),

  repo: null,

  setRepo: (repo) => set({ repo }),

  repoCommits: [],

  setRepoCommits: (repoCommits) => set({ repoCommits }),

  repoLanguages: null,

  setRepoLanguages: (repoLanguages) => set({ repoLanguages }),
}));
