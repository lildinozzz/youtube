import { SearchIcon } from "lucide-react";

export const SearchInput = () => {
  return (
    <form className="flex w-full max-w-[600px]">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-10 pl-4 pr-12 rounded-l-full border focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-[56px] h-10 flex items-center justify-center bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200 
        disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <SearchIcon className="size-5" />
      </button>
    </form>
  );
};
