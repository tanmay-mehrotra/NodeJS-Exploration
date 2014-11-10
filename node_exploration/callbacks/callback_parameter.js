var events = require('events');
function CarShow(){
	console.log("inside CarShow");
	events.EventEmitter.call(this);
	this.seeCar = function(make){
		this.emit('sawCar', make);
	};
}

CarShow.prototype.__proto__ = events.EventEmitter.prototype;
var show = new CarShow();
function logCar(make){
	console.log("Saw a " + make);
}

show.on("showCar", logCar);

show.seeCar("Ferrari");