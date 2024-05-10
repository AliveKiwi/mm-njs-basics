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
  // Instead of res.write() and res.setHeader() we can directly do res.send()
  res.send('<h1>Hello from Express!</h1>');
});

// const server = http.createServer(app); //No longer needed

app.listen(3000);
