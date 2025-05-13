interface ButtonProps {
  name: string;
  className?: string;
  disabled?: boolean;
}

export function Button({ name, className = "", disabled }: ButtonProps) {
  return (
    <div className="w-full">
      <button
        type="submit"
        className={`btn btn-primary w-full ${className}`}
        disabled={disabled}
      >
        {name}
      </button>
    </div>
  );
}
