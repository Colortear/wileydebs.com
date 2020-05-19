const http = require('http');

const hostname = '206.189.170.144';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('app up ad running');
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
