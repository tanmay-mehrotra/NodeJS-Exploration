var stream = require("stream");
var util = require("util");
util.inherits(JSONObjectStream, stream.Transform);
function JSONObjectStream(opt){
	stream.Transform.call(this, opt);
};

JSONObjectStream.prototype._transform = function(data, encoding, callback){
	object = data ? JSON.parse(data.toString()) : "";
	this.emit("object", object);
	object.handled = true;
    callback();
};

JSONObjectStream.prototype._flush = function(cb){
	cb();
};

var tc = new JSONObjectStream();
tc.on("object", function(object){
	console.log("name: %s", object.name);
	console.log("color %s", object.color);
});

tc.write('{"name":"tanmay", "color":"Green"}');