const http = require('http');

const express = require('express');

const app = express();

// next is passed to use method to allow express to move on to next middleware
app.use((req, res, next) => {
  console.log('I am the middlewre');
  next(); // If we don't call it then the request won't go to next app.use()
});

app.use((req, res, next) => {
  console.log('I am another middlewre');
});

const server = http.createServer(app);

server.listen(3000);
