var port = 4000;
var server = require('net').createServer();

server.on('listening', function(){
	console.log('server is listening on port', port);
});

server.on('connection', function(socket){
	console.log('Server has a new connection');
	socket.on('data',function(data){
		console.log('data received on server side ' + data.toString());
	});
	socket.write("Hey this is server");
	//socket.end();
	//server.close();
});

server.on('close', function(){
	console.log('Server is now closed');
});

server.on('error', function(err){
	console.log('Error occured: ', err.message);
});

server.listen(port);