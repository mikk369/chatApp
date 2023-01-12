const app = require('express')();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:8080'],
  },
});

io.on('connection', (socket) => {
  // join event
  socket.on('join', (username) => {
    socket.username = username;
    socket.broadcast.emit('message', {
      message: socket.username + ' has joined the chat',
    });
  });
  //   sends message and username back to client
  socket.on('message', (msg) =>
    io.emit('message', { username: msg.username, message: msg.message })
  );
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
