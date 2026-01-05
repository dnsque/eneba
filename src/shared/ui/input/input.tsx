import { forwardRef, useState } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type = "search", ...props }, ref) => {
    const [value, setValue] = useState("");
    const [focused, setFocused] = useState(false);

    return (
      <div className="relative w-full">
        {focused && (
          <div
            className="fixed inset-0 bg-black/50 z-0 transition-opacity duration-200"
            onClick={() => setFocused(false)}
          />
        )}
        <div className="relative z-20 w-full max-w-md ">
          <input
            ref={ref}
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            placeholder="Search for games, top-ups and more"
            className={`
            p-3
            border
          focus:bg-black/20
            focus: w-full
            outline-none
            font-bold
            text-xl
            pr-10
            ${className}
          `}
            {...props}
          />
          {value && (
            <button
              type="button"
              onClick={() => setValue("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 duration-200 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
