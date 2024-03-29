import {axios} from "../../../service/dataService";
import React, { useEffect } from "react";
import "./Search.css";
import TrackView from "./TrackView/TrackView";
function Search() {
  const [searchData, setSearchData] = React.useState("");
  const [searchResult, setSearchResult] = React.useState("");
  useEffect(() => {
    console.log(searchData);
    searchData &&
      axios
        .get("search/music/" + searchData)
        .then((res) => {
          console.log(res.data);
          setSearchResult(res.data);
        })
        .catch((err) => {});
  }, [searchData]);
  return (
    <div className="search-container">
      <h2>Search</h2>
      <input
        type={"text"}
        placeholder={"Search"}
        value={searchData}
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
      />
      <div className="searchData">
        {searchResult && (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Published On</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {searchResult &&
                searchResult
                  .sort((x) => 0.5 - Math.random())
                  .map((d, i) => <TrackView obj={d} i={i + 1} key={i} />)}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Search;
