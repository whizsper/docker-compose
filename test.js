// Load the http module to create an http server.
var http = require('http');
 
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hai salut!\nSunt instanta : " + process.env.INSTANCE_NO);
});
 
server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
