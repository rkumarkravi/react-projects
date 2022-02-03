import { Avatar, Badge } from '@mui/material';
import './Post.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ReplyIcon from '@mui/icons-material/Reply';
import { doc, increment, updateDoc } from 'firebase/firestore';
import db from '../../firebase';
import { useState } from 'react';
import CommentSection from './CommentSection';
function Post({pid,data}) {
  const [onelikeAtatime,setOneLike]=useState(true);
  const [commentSecOpen,setCommentSecOpen]=useState(false);
  const setLike=()=>{
    if(onelikeAtatime===true){
      updateDoc(doc(db,"posts",pid),{
        "likes":increment(1)
      });
      setOneLike(false);
    }
  };
  const openCommentSec=()=>{
    setCommentSecOpen(true);
  }
  return <div className="Post">
      <div className="Post__info">
        <Avatar src={data.profSrc}/>
        <div className="Post__detail">
            <div className="Post__username">{data.username}</div>
            <div className="Post__timestamp">{new Date(data.timestamp?.toDate()).toUTCString()}</div>
        </div>
      </div>
      <div className="Post_Text">
        {data.text}
      </div>
      {data.imgSrc && <div className="Post_image" style={{backgroundImage:`url(${data.imgSrc})`}}></div>}
      <div className="Post__buttons">
          <div className="Post__button" onClick={setLike}>
              <Badge badgeContent={data.likes} color="primary">
                  <ThumbUpIcon fontSize="large" style={{'color':onelikeAtatime===false?'#227df2':'gray'}}/>
              </Badge>
              <h4>Like</h4>
          </div>
          <div className="Post__button" onClick={openCommentSec}>
              <InsertCommentIcon fontSize="large"/>
              <h4>Comment</h4>
          </div>
          <div className="Post__button">
              <ReplyIcon fontSize="large" style={{'transform':'rotateY(-180deg)'}}/>
              <h4>Share</h4>
          </div>
      </div>
      <div>
        {commentSecOpen && <CommentSection key={pid} pid={pid} commentData={data.comments}/>}
      </div>
  </div>;
}

export default Post;
