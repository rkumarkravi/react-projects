// SearchBar.js

import React from "react";
import { useStateProvider } from "../../state-manage/StatePovider";
import { MdClear } from "react-icons/md";

const SearchBar = () => {
  const {data,updateData}=useStateProvider();
  return (
    <div className="relative">
        <input
          type="text"
          placeholder="Search recipes"
          style={{"width":"28em"}}
          value={data.searchText}
          onChange={(e) => updateData("searchText",e.target.value)}
          className="bg-slate-500 border-none outline-none text-white placeholder-white px-4 py-2 rounded-full backdrop-filter backdrop-blur-md"
        />
        {data.searchText && <MdClear className="text-black text-xl clear-button bg-yellow-500 rounded-full" onClick={()=>{updateData("searchText","")}}/>}
    </div>
  );
};

export default SearchBar;
