interface ReposItemContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export function ReposItemContainer({
  children,
  className = "",
}: ReposItemContainerProps) {
  return (
    <div
      className={`card w-full bg-base-100 shadow-md p-4 border border-base-300 ${className}`}
    >
      {children}
    </div>
  );
}
