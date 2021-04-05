var http = require('http');

//creating a server with http variable 

var server = http.createServer(function(req, res ){
  //header
  
  Response.writeHead(200, {'content-type':'text/plain'});
  //send back some information

  Response.end('welcome to zuri training!!');
});
//creating a server

server.listen(4000, '127.0.0.11');
console.log('congrats, your server has successfully been created and fully running');