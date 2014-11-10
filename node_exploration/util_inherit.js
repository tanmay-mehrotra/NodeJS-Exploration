util = require('util');
var EventEmitter = require('events').EventEmitter;

var myClass = function(){};

util.inherits(myClass,EventEmitter);

myClass.prototype.someMethod = function(){
	this.emit("custom_event","arg1","arg2");
};

var myInstance = new myClass();

myInstance.on('custom_event', function(str1, str2){
	console.log('got a custom_event with %s and %s',str1,str2);
});

myInstance.someMethod();