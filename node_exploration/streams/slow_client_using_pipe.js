var fs = require('fs');
require('http').createServer(function(req, res){
	var rs  = fs.createReadStream('./slow_client.js');
	rs.pipe(res,{end:false});
	rs.on('end',function(){
		res.write("And that's all, folks! ");
		res.end();
	});
}).listen(8080);