"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import XMark from './icons/XMark';

const Input = () => {
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full max-w">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7" />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for games, top-ups and more"
        className="w-137.5 p-4 pl-12 border focus:outline-none font-bold text-xl"
      />
      {value && (
        <button
          type="button"
          onClick={() => setValue("")}
          className="absolute right-5 top-1/2 -translate-y-1/2"
        >
          <XMark className="transition-colors duration-200 text-gray-400 hover:text-white" />
        </button>
      )}
    </div>
  );
};

export default Input;
