var port = 4001;
var server = require('net').createServer();

server.on('listening', function(){
	console.log('server is listening on port', port);
});

server.on('connection', function(socket){
	console.log('Server has a new connection');
	socket.end();
	server.close();
});

server.on('close', function(){
	console.log('Server is now closed');
});

server.on('error', function(err){
	console.log('Error occured: ', err.message);
});

server.listen(port);