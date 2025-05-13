import { Layout } from "@/components/common";
import { ReposList, ReposModal, UsernameForm } from "@/components/home";

export default function Home() {
  return (
    <Layout>
      <UsernameForm className="mb-8" />

      <ReposList />

      <ReposModal />
    </Layout>
  );
}
