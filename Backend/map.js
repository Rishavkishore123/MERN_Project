const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 4000;

app.get('/',(req,resp)=>{
    resp.send("user visible")
})

io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Handle location updates here
    socket.on('locationUpdate', (data) => {
        // Broadcast the updated location to all clients
        socket.broadcast.emit('locationUpdate', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(PORT,()=>{
    console.log("server is running")
})

