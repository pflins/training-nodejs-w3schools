//https://www.w3schools.com/nodejs/nodejs_get_started.asp

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello Paulo Lins 2!');
}).listen(8080);