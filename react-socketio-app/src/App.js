import React, { useEffect, useState } from "react";
import socket from "./socket/socket";
import "./App.css";

const App = () => {
  const id = socket.id;
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Listen for incoming messages
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("userSocketMap", (onlineUsers) => {
      setUsers(onlineUsers);
      console.log("onlineUsers",onlineUsers);
    });
  }, []);

  // Function to send a new message
  const sendMessage = () => {
    socket.emit("message", {
      targetSocketId: "l0dtWkF38MeighuYAAAD",
      id: id,
      message: newMessage,
    });
    setNewMessage("");
  };

  return (
    <div>
      <div className="login-dialog">
        
      </div>
      <div style={{"color":"red"}}>{id}</div>
        <div className="usersList">
        {users.filter(x=>x[0]!==id).map(([key, value]) => (
            <div
              key={key}
            >
              {value.id}
            </div>
          ))}
        </div>
      <div className="message-box">
        <h1>Chat App</h1>
        <div className="message-container">
          {messages.map((message, index) => (
            <div
              className={socket.id === message.id ? "chat-left" : "chat-right"}
              key={index}
            >
              {message.message}
            </div>
          ))}
        </div>
        <div className="ctrls">
          <input
            className="input-style"
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default App;
