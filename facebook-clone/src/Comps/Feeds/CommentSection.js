import { arrayUnion,doc,updateDoc } from 'firebase/firestore';
import React, {useState } from 'react';
import db from '../../firebase';
import { useStateValue } from '../../StateProvider';
import Comment from './Comment';
import './CommentSection.css';
function CommentSection({pid,commentData}) {
  const [comments, setComments] = useState([]);
  const [{user},dispatch]=useStateValue();
  const [inputComment,setInputComment]=useState("");

  const handleSubmit=(e)=>{
      e.preventDefault();
      updateDoc(doc(db,"posts",pid),{
        "comments":arrayUnion({
          "timestamp":new Date().getTime(),
          "username":user.displayName,
          "msg":inputComment,
          "profSrc":user.photoURL,
        })
      });
      setInputComment("");
  };

  // setComments(
  //   commentData.map((doc) => ({
  //     data: doc,
  //   }))
  // );
  
  return <div className="Comment">
        <form>
          <input type="text" value={inputComment} onChange={(e)=>setInputComment(e.target.value)} placeholder='Write your comment...'/>
          <button type="submit" onClick={handleSubmit}>Hidden</button>
        </form>
        <div className="comments">
        {commentData.map((comment,i) => (
          <Comment
            key={i}
            cid={pid}
            data={comment}
          />
        ))}
        </div>
  </div>;
}

export default CommentSection;
