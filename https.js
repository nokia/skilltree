var express = require('express');
var app = express();
var fs = require('fs');
var key = fs.readFileSync('domain.key');
var cert = fs.readFileSync('domain.crt');
var options = {
	key: key,
	cert: cert
};
var https = require('https');
https.createServer(options, app).listen(4443);
console.log('running...');