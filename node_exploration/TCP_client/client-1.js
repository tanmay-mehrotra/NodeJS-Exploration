var net = require('net');
var port = 4000;

process.stdin.resume();
var conn = net.createConnection(port, function(conn){
	console.log(" We have a new connection ");
});

process.stdin.pipe(conn);
conn.pipe(process.stdout);




