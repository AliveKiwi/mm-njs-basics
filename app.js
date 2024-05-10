const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// next is passed to use method to allow express to move on to next middleware
// next(); // If we don't call it then the request won't go to next app.use()

//
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  console.log('In second middleware');
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

app.post('/product', (req, res, next) => {
  // req.body won't work by default it need to be parsed by bodyParser
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
