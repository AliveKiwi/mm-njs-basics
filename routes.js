const fs = require('fs');

const requestHandler = (req, res) => {
  const { url, method } = req;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end(); // If we don't put it then the request will go on to next set of instructions
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    // reading data by registering eventEmitter using req.on, listening to 'data' event, and executing the function (chunk)=>{}
    req.on('data', (chunk) => {
      console.log('Chunk', chunk);
      body.push(chunk);
      console.log('Body', body, body.length);
    });

    // listening to 'end' event to process the data
    return req.on('end', () => {
      // Creating a new buffer by concating, and converting it to string
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1]; // message = message=<value>

      // fs.writeFileSync('message.txt', message); // This is a sync/blocking method

      fs.writeFile('message.txt', message, (err) => {
        // res.writeHead(302, { Location: '/' });
        console.log(err);
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
};

// module.exports = requestHandler

// module.exports = {
//   handler: requestHandler,
//   someText: ' Some hard coded text',
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

exports.requestHandler = requestHandler;
exports.someText = 'Some hard coded text';
