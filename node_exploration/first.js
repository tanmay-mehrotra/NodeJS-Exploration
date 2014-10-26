var events = require('events');

function myObj(){
	events.EventEmitter.call(this);
	this.myFunct = function(data, callback){
		console.log("compressing data (%s)", data);
	    console.log("data compressed");	
	    this.emit("abcd", callback);
	};
}

myObj.prototype.__proto__ = events.EventEmitter.prototype;
var myObjref = new myObj();
myObjref.on("abcd", function(callback){
	callback();
});

//**************  main()  **********************
var input = "...............text...........";


myObjref.myFunct(input,function(){
	console.log("compresssion done ...lets deflate it");
});