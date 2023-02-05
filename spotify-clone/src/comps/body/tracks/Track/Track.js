import React from "react";
import "./Track.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
function Track({ type, obj }) {
  return (
    <Link to={"/album"} state={{albumData:obj}}>
      {type === "image-title" && (
        <div className={type}>
          <div className="image-text">
            <img src={obj.albumArt?obj.albumArt:'https://misc.scdn.co/liked-songs/liked-songs-640.png'} alt={obj.name} />
            <h5>{obj.name}</h5>
          </div>
          <div className="play-button">
            <PlayArrowIcon sx={{ color: grey[90] }} />
          </div>
        </div>
      )}
      {type === "big-image-title" && (
        <div className={type}>
          <img src={`http://localhost:8080/musify/download/file/${obj.albumArt}`} alt={obj.albumName} />
          <h5>{obj.albumName}</h5>
          <div className="play-button">
            <PlayArrowIcon sx={{ color: grey[90] }} />
          </div>
        </div>
      )}
    </Link>
  );
}

export default Track;
