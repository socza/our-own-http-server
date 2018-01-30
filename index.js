var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    
    if (request.method === 'GET' && request.url === '/') {

        fs.readFile('./index.html', function(err, data) {
		
			response.write(data);
			response.end();
			
			if (err) throw err;
	
		});
    
    } else {

        fs.readFile('./404.html', function(err, data) {
		
			response.write(data);
			response.end();
			
			if (err) throw err;
	
		});
    
    }

}).listen(8080);