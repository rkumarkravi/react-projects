import { Avatar} from '@mui/material';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from '../../StateProvider';
import {serverTimestamp, addDoc, collection} from "firebase/firestore";
import db from "../../firebase";
function MessageSender() {
    const [{user},dispatch]=useStateValue();
    const [input,setInput]=useState("");
    const [imageUrl,setImageUrl]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
            if(input!=null || imageUrl !=null){
            addDoc(collection(db, "posts"),{
                text:input,
                timestamp:serverTimestamp(),
                imgSrc:imageUrl,
                profSrc:user.photoURL,
                username:user.displayName,
                likes:0,
                comments:[],
            });
            setInput("");
            setImageUrl("");
        }
    };

  return (<div className="messageSender">
      <div className="messageSender__form">
          <Avatar src={user.photoURL}/>
          <form>
          <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`What's in your Mind, ${user.displayName}?`} className='meaasgeSender__form_input1'/>
          <input type="text" value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} placeholder="Image url/Optional"/>
          <button type="submit" onClick={handleSubmit}>Hidden Submit</button>
          </form>
      </div>
      <div className="messageSender__buttons">
          <div className="messageSender__button">
                <VideocamIcon/><h4>Live Video</h4>
          </div>
          <div className="messageSender__button">
                <PhotoLibraryIcon/><h4>Photo/Video</h4>
          </div>
          <div className="messageSender__button">
                <InsertEmoticonIcon/><h4>Feeling/Activity</h4>
          </div>
      </div>
  </div>);
}

export default MessageSender;
