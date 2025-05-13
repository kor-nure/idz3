import { reposModalId } from "../ReposModal";
import { ReposItemContainer } from "./ReposItemContainer";
import { Api } from "@/api";
import type { IRepo, IRepoCommit, IRepoLanguages } from "@/interfaces";
import { useReposStore } from "@/stores";
import { openModal } from "@/utils";
import { useState } from "react";

interface ReposItemProps {
  repo: IRepo;
  className?: string;
}

export function ReposItem({ repo, className = "" }: ReposItemProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setRepo = useReposStore((s) => s.setRepo);
  const setRepoCommits = useReposStore((s) => s.setRepoCommits);
  const setRepoLanguages = useReposStore((s) => s.setRepoLanguages);

  const openRepo = async (
    e: React.MouseEvent<HTMLButtonElement>,
    ownerLogin: string,
    repoName: string
  ) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      setRepo(null);
      setRepoCommits([]);
      setRepoLanguages(null);

      // Fetch repo
      const repoResponse = await Api.get<IRepo>(
        `https://api.github.com/repos/${ownerLogin}/${repoName}`
      );
      const repo = repoResponse.data;

      setRepo(repo);

      // Fetch repo commits
      const repoCommitsResponse = await Api.get<IRepoCommit[]>(
        `https://api.github.com/repos/${ownerLogin}/${repoName}/commits`
      );
      const repoCommits = repoCommitsResponse.data;

      setRepoCommits(repoCommits);

      // Fetch repo languages
      const repoLanguagesResponse = await Api.get<IRepoLanguages>(
        `https://api.github.com/repos/${ownerLogin}/${repoName}/languages`
      );
      const repoLanguages = repoLanguagesResponse.data;

      setRepoLanguages(repoLanguages);

      openModal(reposModalId);
    } catch (err) {
      console.error(err);
    }

    setIsLoading(false);
  };

  return (
    <ReposItemContainer className={className}>
      <div className="flex items-center justify-between mb-2">
        <h2 className="card-title text-lg">{repo.name}</h2>

        <button
          className="btn btn-sm btn-outline:"
          onClick={(e) => openRepo(e, repo.owner.login, repo.name)}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "View"}
        </button>
      </div>

      <p className="text-sm text-gray-500">
        {repo.description || "No description"}
      </p>

      <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
        {repo.language && <span>Language: {repo.language}</span>}

        <span>⭐ {repo.stargazers_count}</span>

        <span>🍴 {repo.forks_count}</span>
      </div>
    </ReposItemContainer>
  );
}
