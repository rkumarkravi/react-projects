import React from "react";
import Track from "./Track/Track";
import "./TrackRow.css";
function TrackRow({ trackTitle, type, data }) {
  return (
    <div className={type + "-row"}>
      {trackTitle && (
        <div className="trackTitle">
          {" "}
          <h2>{trackTitle}</h2>{" "}
        </div>
      )}
      <div className="cards">
        {data &&
          data
            .sort((x) => 0.5 - Math.random())
            .map((d, i) => <Track type={type} obj={d} key={i} />)}
      </div>
    </div>
  );
}

export default TrackRow;
