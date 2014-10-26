var zlib = require("zlib");
var input = '...............text.............';
zlib.deflate(input, function(err, buffer){
	if(!err){
		console.log("deflate (%s) : ", buffer.length, buffer.toString('base64'));
		zlib.inflate(buffer, function(err, buffer){
			if(!err){
				console.log("inflate (%s) : ", buffer.length, buffer.toString());
			}
		});
		zlib.unzip(buffer, function(err, buffer){
			if(!err){
				console.log("unzip deflate (%s) : ", buffer.length, buffer.toString());
			}
		});
	}
});

