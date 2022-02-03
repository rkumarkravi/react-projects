import { Avatar } from "@mui/material";
import React from "react";
import './StoryItem.css';
function StoryItem({imgSrc,profileSrc,userName}) {
  return (<div className="storyItem" style={{backgroundImage:`url(${imgSrc})`}}>
      <Avatar src={profileSrc}/>
    <h4>{userName}</h4>
  </div>);
}

export default StoryItem;
