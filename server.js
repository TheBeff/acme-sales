const http = require('http');
const server = http.createServer(require('./app'));

server.listen(process.env.PORT, function(){
	console.log('You are listening on port: ' + process.env.PORT);
});