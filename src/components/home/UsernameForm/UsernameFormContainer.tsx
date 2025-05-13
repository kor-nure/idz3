interface UsernameFormContainerProps {
  children?: React.ReactNode;
  className?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

export function UsernameFormContainer({
  children,
  className = "",
  onSubmit,
}: UsernameFormContainerProps) {
  return (
    <form
      className={`card w-full max-w-sm bg-base-100 shadow-xl p-6 ${className}`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
