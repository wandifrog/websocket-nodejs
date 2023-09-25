// Replace 'ws://localhost:8080' with the URL of your WebSocket server
const socket = new WebSocket('ws://localhost:8080');

// Event handler when the WebSocket connection is opened
socket.addEventListener('open', (event) => {
  console.log('Connected to the WebSocket server');
  
  // Send a message to the server
  socket.send('Hello, WebSocket server!');
});

// Event handler for incoming messages from the server
socket.addEventListener('message', (event) => {
  console.log(`Received from server: ${event.data}`);
});

// Event handler when the WebSocket connection is closed
socket.addEventListener('close', (event) => {
  if (event.wasClean) {
    console.log('WebSocket connection closed cleanly');
  } else {
    console.error('WebSocket connection closed unexpectedly');
  }
});