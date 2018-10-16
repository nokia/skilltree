const http = require('http');
var url  = require('url');
var fs = require('fs');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(request.url, null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('not found');
        } else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(3000);