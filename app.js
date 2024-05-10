const http = require('http');

const server = http.createServer((req, res) => {
  console.log('url', req.url);
  console.log('method', req.method);
  console.log('headers', req.headers);
  // process.exit();
});

server.listen(3000);
