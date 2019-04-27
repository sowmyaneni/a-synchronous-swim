const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  // if (fs.exists(req.url)) {
  //   res.writeHead(200, headers);
  // } else {
  //   res.writeHead(404, headers);
  // }
  // console.log(req.body)
  // var body = '';

  // if (req.method === 'OPTIONS') {
  //   res.end();
  // } else if (req.method === 'POST') {
  //   req.on('data', function(data) {
  //     body += (data.toString('utf8'));
  //     console.log(body);
  //     res.end(body);
  //   });
  if (req.method === "GET") {
    res.end();
  }
  // var dir = ['up', 'down', 'left', 'right'];
  // var randDir = dir[Math.round(Math.random()*dir.length)];
  
  // res.end(randDir);
  next();
};
