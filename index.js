var fs = require('fs');
var http = require('http');
var server = http.createServer();

server.on('request', function (request, response) {
    
    if (request.method === 'GET' && request.url === '/') {

    	response.setHeader("Content-Type", "text/html; charset=utf-8");
        fs.readFile('./index.html', function(err, data) {
		
			if (err) throw err;
			response.write(data);
			response.end();
			
	
		});
    
    } else {

            
		response.setHeader("Content-Type", "image/jpg");
        fs.readFile('./404.jpg', function(err, data) {
		
			if (err) throw err;
			response.write(data);
			response.end();
			
	
		});
    
    }

}).listen(8080);