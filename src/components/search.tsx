import React, { Dispatch, useState } from "react";

export function SearchForm({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: Dispatch<string>;
}) {
  const [value, setValue] = useState(searchTerm);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchTerm(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-12 text-sm border border-gray-300 rounded-lg"
          placeholder="Enter your desired industry . . ."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />

        <button
          type="submit"
          className="text-white absolute right-0 mr-2 bottom-1.5 bg-[#F35D05]"
        >
          Search
        </button>
      </div>
    </form>
  );
}
