// SearchBar.js

import React from "react";

const SearchBar = () => {
  return (
    <div className="relative">
        <input
          type="text"
          placeholder="Search recipes"
          className="bg-slate-500 border-none outline-none text-white placeholder-white px-4 py-2 rounded-full backdrop-filter backdrop-blur-md"
        />
    </div>
  );
};

export default SearchBar;
