import { Avatar } from "@mui/material";
import React from "react";
import './Comment.css';
function Comment({cid,data}) {
  return (
    <div className="comment">
      <Avatar src={data.profSrc}/>
      <div className="comment__user_detail">
        <h5>{data.username}</h5>
        <div>{data.msg}</div>
      </div>
    </div>
  );
}

export default Comment;
