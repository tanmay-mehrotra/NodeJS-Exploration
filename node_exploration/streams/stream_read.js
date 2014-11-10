var stream = require('stream');
var util = require('util');
util.inherits(Answers, stream.Readable);

function Answers(){
	stream.Readable.call(this);
	this.quotes=["yes", "no", "maybe"];
	this._index = 0;
}

Answers.prototype._read = function(){
	if(this._index > this.quotes.length){
		this.push(null);
	}else{
		this.push(this.quotes[this._index]);
		this._index += 1;
		console.log(this._index)
	}
};

var r = new Answers();
console.log("Direct read: " + r.read().toString());
r.on("data", function(data){
	console.log("callback read: " + data.toString());
});
r.on("end",function(data){
	console.log("no more Answers.");
});

