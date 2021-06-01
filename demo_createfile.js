//https://www.w3schools.com/nodejs/nodejs_filesystem.asp

var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello content How are you!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });