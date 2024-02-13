const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve the HTML page for WebSocket connection
app.get('/websocket', (req, res) => {
  res.sendFile(__dirname + '/websocket.html');
});

wss.on('connection', function connection(ws) {
  console.log('A new client connected');

  ws.on('message', function incoming(message) {
    console.log('Received:', message);
    // Echo the received message back to the client
    ws.send(message);
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
