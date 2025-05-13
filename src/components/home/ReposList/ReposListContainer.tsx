interface ReposListContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export function ReposListContainer({
  children,
  className = "",
}: ReposListContainerProps) {
  return (
    <div className={`grid gap-4 w-full max-w-4xl ${className}`}>
      {children}
    </div>
  );
}
