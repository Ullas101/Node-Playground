var http = require('http')
var fs = require('fs');
var port =  process.argv[2];
var filename = process.argv[3];

var server = http.createServer(function (request, response){
	var srcStream = fs.createReadStream(filename);
	response.writeHead('200', { 'content-type':'text/plain'});
	srcStream.pipe(response);
});
server.listen(Number(port));