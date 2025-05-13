import { forwardRef } from "react";

interface InputProps {
  name: string;
  className?: string;
  placeholder?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function RefInput(
    { name, className = "", placeholder }: InputProps,
    ref
  ) {
    return (
      <div className="w-full">
        <label className="label mb-1 text-sm" htmlFor={`id-${name}`}>
          {name}
        </label>

        <input
          id={`id-${name}`}
          type="text"
          placeholder={placeholder}
          className={`input input-bordered w-full ${className}`}
          ref={ref}
        />
      </div>
    );
  }
);
