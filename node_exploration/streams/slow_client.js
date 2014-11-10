require('http').createServer(function(req,res){
	var rs = fs.createReadStream('/path/to/big/file');
	rs.on('data',function(data){
		if(!res.write(data)){
			rs.pause();
		}
	});
	
	rs.on('drain', function(){
		rs.resume();
	});

	rs.on('end', function(){
		res.end();
	});
}).listen(8080);