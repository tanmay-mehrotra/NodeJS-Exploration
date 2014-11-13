require('http').createServer(function(req,res){
	res.writeHead(200,{
		'content-type' :'text/plain',
	    'Cache-Control' :'max-age=3600'});
	for(var i = 0; i < 999999999; i++);
	res.write('Hello world');
	res.end();
}).listen(4000);