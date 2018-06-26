var http = require('http');
var url = require('url');
var portno = Number(process.argv[2])

function createParseTimeJson(date){
    var obj = { hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
              }
    return JSON.stringify(obj);
}

function createUnixTimeJson(date){
    var obj = { unixtime: date.getTime() };
    return JSON.stringify(obj);
}

var server = http.createServer(function (request, response){
	if(request.method === 'GET'){
        var urlObj = url.parse(request.url, true);
        var queryObj = urlObj.query;
		if(request.url.includes('api/parsetime')){
            response.writeHead('200', { 'Content-Type':'application/json' });
            var date = new Date(queryObj.iso);
            response.end(createParseTimeJson(date));
		}
		else if(request.url.includes('/api/unixtime')){
            response.writeHead('200', { 'Content-Type':'application/json' });
            var date = new Date(queryObj.iso);
            response.end(createUnixTimeJson(date));
		}
        else{
            response.writeHead('404', { 'Content-Type':'text/plain' } );
            response.end('The url passed is incorrect:'+request.url);
        }        
	}
	else{
		response.writeHead('404', { 'Content-Type':'text/plain' });
		response.end('Send only request with method GET!');
	}
});

server.listen(portno);


/*
  var http = require('http')
  var url = require('url')

  function parsetime (time) {
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  }

  function unixtime (time) {
    return { unixtime: time.getTime() }
  }

  var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result

    if (/^\/api\/parsetime/.test(req.url)) {
      result = parsetime(time)
    } else if (/^\/api\/unixtime/.test(req.url)) {
      result = unixtime(time)
    }

    if (result) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(result))
    } else {
      res.writeHead(404)
      res.end()
    }
  })
  server.listen(Number(process.argv[2]))*/