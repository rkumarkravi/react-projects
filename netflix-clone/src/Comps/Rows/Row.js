import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./Row.css";
function Row({ title, url }) {
  const [movies, setMovies] = useState([]);
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row__row-style">
        {movies.map((movie, i) => (
          <img
            key={i}
            src={imageBaseUrl + movie.poster_path}
            alt="NotFound"
            className="Row__posterConfig"
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
