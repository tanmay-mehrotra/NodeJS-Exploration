var event_emitter = require('events').EventEmitter;

event_emitter.prototype.once = function(type,callback){
   var that = this;
   this.on(type,function listener(){
   	  that.removeListener(type,listener);
   	  callback.apply(that, arguments2);
   });
};

function amount(){
	event_emitter.call(this);
}

amount.prototype = Object.create(event_emitter.prototype);
var m = new amount();
m.once("data",function(){
	console.log("will receive data only once");
});

m.emit("data");
m.emit("data");