const express= require('express');
const app =express();

const http= require('http');
const socket =require('socket.io');

const server= http.createServer(app);
const io= socket(server);

io.on("connection",()=>{
    console.log(connected)
})

app.get("/",(req,resp)=>{
    resp.send("How was the day today")
})

server.listen(5001,()=>{
    console.log("server is running")
})

