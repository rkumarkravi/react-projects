import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
function Banner({ url }) {
  const [main, setMain] = useState({});
  const [allResult, setResult] = useState([]);
  const [index, setIndex] = useState(0);
  const imageBaseOrgUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      console.log(request.data.results);
      setResult(request.data.results);
      setMain(request.data.results[index]);
      setIndex(index + 1);
      return request;
    }
    fetchData();
  }, []);
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (index <= allResult.length - 1) {
        setMain(allResult[index]);
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 10000);
    // clearing interval
    return () => clearInterval(timer);
  });

  return (
    <div className="Main">
      <div
        style={{
          backgroundImage: `url('${imageBaseOrgUrl}${main.backdrop_path}`,
        }}
        className="main-banner"
      >
        <div className="new-banner">
          <div className="title">{main.title ? main.title : main.name}</div>
          <div className="buttons">
            <button type="button">PLAY</button>
            <button type="button">MY LIST</button>
          </div>
          <p className="desc" title={main.overview}>
            {main.overview?.substr(0, 180)}..
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
