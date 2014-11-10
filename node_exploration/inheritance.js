var ev = require('events');

function funct(){
  this.inside_add = function(){
  	console.log("inside funct");
  };
}

function funct1(){
  this.once = function(type,callback){
  	console.log("inside funct1");
  };
}

funct1.prototype = Object.create(ev.EventEmitter.prototype);

var f1 = new funct1();
f1.emit("data");
f1.once("data",function(){
	console.log("i will do nothing")
});