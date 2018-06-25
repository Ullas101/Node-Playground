var http = require('http');
var map = require('through2-map');
var portno = process.argv[2];

var server = http.createServer(function (request, response){
	if( request.method === 'POST'){
		response.writeHead('200', { 'content-type':'text/plain' });
		request.pipe(map(function (data){
			return data.toString().toUpperCase();
		})).pipe(response);
	}
	else
		response.end('Send me only POST!');
});

server.listen(Number(portno));