import { Modal } from "../modals";
import { useReposStore } from "@/stores";

export const reposModalId = "repos-modal";

export function ReposModal() {
  const repo = useReposStore((s) => s.repo);
  const repoCommits = useReposStore((s) => s.repoCommits);
  const repoLanguages = useReposStore((s) => s.repoLanguages);

  return (
    <Modal id={reposModalId} title={repo?.name || ""}>
      <div className="space-y-4">
        <div className="text-sm">
          <p>
            <strong>URL:</strong>{" "}
            <a
              href={repo?.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              {repo?.html_url}
            </a>
          </p>

          <p>
            <strong>Created:</strong>{" "}
            {new Date(repo?.created_at || "").toLocaleDateString()}
          </p>

          <p>
            <strong>Last Updated:</strong>{" "}
            {new Date(repo?.updated_at || "").toLocaleDateString()}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-1">Languages</h3>

          {repoLanguages && Object.keys(repoLanguages).length > 0 ? (
            <ul className="list-disc list-inside text-sm">
              {Object.entries(repoLanguages).map(([lang, bytes]) => (
                <li key={lang}>
                  {lang} — {bytes.toLocaleString()} bytes
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No language data.</p>
          )}
        </div>

        <div>
          <h3 className="font-semibold text-base mb-1">Recent Commits</h3>

          {repoCommits.length > 0 ? (
            <ul className="space-y-2 text-sm max-h-60 overflow-auto pr-1">
              {repoCommits.map((commit) => (
                <li
                  key={commit.sha}
                  className="border rounded p-2 border-base-300"
                >
                  <p className="text-xs text-gray-500">
                    {new Date(commit.commit.author.date).toLocaleString()}
                  </p>

                  <p className="font-mono text-xs break-all">
                    {commit.sha.slice(0, 8)}
                  </p>

                  <p>{commit.commit.message}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No commits found.</p>
          )}
        </div>
      </div>
    </Modal>
  );
}
