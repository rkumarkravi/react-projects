import React, { useEffect, useState } from "react";
import StoryReels from "../Story/StoryReels";
import "./Feeds.css";
import MessageSender from "../MessageSend/MessageSender";
import Post from "./Post";
import db from "../../firebase";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
function Feeds() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      }
    );
  }, []);

  return (
    <div className="feeds">
      <StoryReels />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          pid={post.id}
          data={post.data}
        />
      ))}
    </div>
  );
}

export default Feeds;
