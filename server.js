const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Event handler when a client connects
wss.on('connection', (ws) => {
  console.log('A client connected');

  // Event handler for incoming messages from clients
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);

    // Send a response back to the client
    ws.send(`Server received: ${message}`);
  });

  // Event handler when a client disconnects
  ws.on('close', () => {
    console.log('A client disconnected');
  });
});