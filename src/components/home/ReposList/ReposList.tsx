import { ReposItem } from "../ReposItem";
import { ReposListContainer } from "./ReposListContainer";
import { useReposStore } from "@/stores";

interface ReposListProps {
  className?: string;
}

export function ReposList({ className = "" }: ReposListProps) {
  const repos = useReposStore((s) => s.repos);

  return (
    <ReposListContainer className={className}>
      {repos.map((repo) => (
        <ReposItem key={repo.id} repo={repo} />
      ))}
    </ReposListContainer>
  );
}
