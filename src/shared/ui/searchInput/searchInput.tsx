import { forwardRef, useState } from "react";
import SearchIcon from "@/shared/ui/icons/search.svg?react";

export const SearchInput = forwardRef<HTMLInputElement>(
  ({ ...props }, ref) => {
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

        <div className="relative z-20 w-full">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-7 h-7 pointer-events-none" />

          <input
            ref={ref}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            type="search"
            placeholder="Search for games, top-ups and more"
            className={`
        w-[550px]
        p-4
        border
        outline-none
        font-semibold
        text-[19px]
        pr-12
        pl-14
        focus:bg-black/20
      `}
            {...props}
          />

          {value && (
            <button
              type="button"
              onClick={() => setValue("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 duration-200 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
