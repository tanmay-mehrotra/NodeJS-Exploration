var stream = require('stream');
var util = require('util');
util.inherits(Writer, stream.Writable);

function Writer(){
	stream.Writable.call(this);
	this.data = new Array();
}

Writer.prototype._write = function(data,encoding,callback){
	this.data.push(data.toString('utf8'));
	console.log("Adding:  " + data);
	callback();
};

var w = new Writer();
for(var i = 1; i <=5; i++){
	w.write("Item" + i , 'utf8', function(){
		console.log("running callback");
	});
}

w.on("finish",function(){
	console.log("finish");
});

w.end("last items");
console.log(w.data);