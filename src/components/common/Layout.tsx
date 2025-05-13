interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div
      className={`min-h-screen bg-base-200 flex flex-col justify-center items-center p-8 ${className}`}
    >
      {children}
    </div>
  );
}
