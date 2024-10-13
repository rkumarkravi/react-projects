const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const http = require('http').createServer(app);
const io = require('socket.io')(http,{
  cors: {
    origin: '*',
  }
});
const userSocketMap = new Map();

// Function to send the userSocketMap to a specific client
function sendUserSocketMap(socket) {
  const userSocketMapData = Array.from(userSocketMap.entries());
  io.emit('userSocketMap', userSocketMapData);
}

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('A user connected',socket.id);

  userSocketMap.set(socket.id,{id:socket.id,"data":{}});
  sendUserSocketMap(socket);
  socket.on('login', (userData) => {
    console.log("loginned");
    // Store the user data with their socket ID in the mapping
    userSocketMap.set(socket.id, userData);

    // Send the updated userSocketMap to the client upon login
    sendUserSocketMap(socket);
  });
  // Listen for 'message' event from clients
  socket.on('message', (message) => {
    console.log(`Received message from ${socket.id}:${message}`);
    // Broadcast the message to all connected clients (including sender)
    const targetSocketId = message.targetSocketId;
    io.to(targetSocketId).emit('message', message);
  });

  // Listen for disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
    userSocketMap.delete(socket.id);
  });
});

// Start the server
const PORT = 3001; // Use a different port than the React app
http.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
