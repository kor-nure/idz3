import type { JSX } from "react";

interface TitleProps {
  tag?: keyof JSX.IntrinsicElements;
  text?: string;
  className?: string;
}

export function Title({
  tag: Tag = "h2",
  text,
  className = "",
}: TitleProps) {
  return (
    <Tag
      className={`text-2xl font-semibold text-base-content ${className}`}
    >
      {text}
    </Tag>
  );
}
