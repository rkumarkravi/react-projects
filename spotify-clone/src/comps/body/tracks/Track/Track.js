import React from "react";
import "./Track.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { grey } from "@mui/material/colors";
function Track({ type, obj }) {
  return (
    <>
      {type === "image-title" && (
        <div className={type}>
          <div className="image-text">
            <img src={obj.src} alt={obj.title} />
            <h5>{obj.title}</h5>
          </div>
          <div className="play-button">
            <PlayArrowIcon sx={{ color: grey[90] }} />
          </div>
        </div>
      )}
      {type === "big-image-title" && (
        <div className={type}>
          <img src={obj.src} alt={obj.title} />
          <h5>{obj.title}</h5>
          <div className="play-button">
            <PlayArrowIcon sx={{ color: grey[90] }} />
          </div>
        </div>
      )}
    </>
  );
}

export default Track;
