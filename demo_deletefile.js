//https://www.w3schools.com/nodejs/nodejs_filesystem.asp

var fs = require('fs');

fs.unlink('mynewfile1.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});