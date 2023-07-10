"use client";
import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
type Props = {};

function SearchButton({}: Props) {
  const { pending } = useFormStatus();
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
      {pending ? "Searching..." : <MagnifyingGlassIcon className="w-5 h-5 " />}
    </button>
  );
}

export default SearchButton;
