var fs = require('fs');
var rs = fs.createReadStream('./slow_client.js');

rs.on('data', function(data){
		console.log(data.toString());
	});

rs.on('end',function(){
	console.log("done reading");
});

setTimeout(function(){
	rs.pause();
	console.log("trying to pause");
},1);

setTimeout(function(){
	console.log("resuming.......");
	rs.resume();
},3000);

console.log("in the meantime");
