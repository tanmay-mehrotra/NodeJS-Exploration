var events = require('events');
function myObj(){
   events.EventEmitter.call(this);
}

myObj.prototype = events.EventEmitter.prototype;

var myobj1 = new myObj();

function myCallback(name,lastname){
	console.log("inside callback " + name + " " + lastname);
}

myobj1.on("someEvents",function(lastname){
	name = "tanmay";
	myCallback(name,lastname);
});

myobj1.emit("someEvents","mehrotra");