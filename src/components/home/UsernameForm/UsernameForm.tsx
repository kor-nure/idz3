import { UsernameFormContainer } from "./UsernameFormContainer";
import { Api } from "@/api";
import { Title } from "@/components/common";
import { Button, Input } from "@/components/inputs";
import type { IRepo } from "@/interfaces";
import { useReposStore } from "@/stores";
import { useRef, useState } from "react";

interface UsernameFormProps {
  className?: string;
}

export function UsernameForm({ className = "" }: UsernameFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const setRepos = useReposStore((s) => s.setRepos);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      setRepos([]);

      const inputValue = (inputRef.current?.value || "").trim();

      if (!inputValue) {
        throw new Error("Empty input value.");
      }

      const response = await Api.get<IRepo[]>(
        `https://api.github.com/users/${inputValue}/repos`
      );
      const repos = response.data;

      setRepos(repos);
    } catch (err) {
      console.error(err);
    }

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    setIsLoading(false);
  };

  return (
    <UsernameFormContainer className={className} onSubmit={handleSubmit}>
      <Title tag="h1" text="Github Repos" className="text-center mb-3" />

      <Input
        name="Username"
        placeholder="Enter username"
        className="mb-4"
        ref={inputRef}
      />

      <Button
        name={isLoading ? "Loading..." : "Submit"}
        disabled={isLoading}
      />
    </UsernameFormContainer>
  );
}
