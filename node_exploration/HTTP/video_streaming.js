var fs = require('fs');
require('http').createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'video/mov'});
	var rs = fs.createReadStream('/Users/tanmaymehrotra/Desktop/sing_bday.mov');
	rs.pipe(res);
}).listen(4000);