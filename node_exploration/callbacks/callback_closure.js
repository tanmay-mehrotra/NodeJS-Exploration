/*function logCar(logMsg, callback){
	process.nextTick(function(){
		callback(logMsg);
	});
}*/


function logCar(logMsg, callback){
	process.nextTick(function(){
          callback(logMsg);
	});
}

var cars = ["f", "p", "b"];

for(var idx in cars){
	var message = "Saw a " + cars[idx];
	(function(msg){
		logCar(msg,function(){
			console.log("closure callback: " + msg);
		});
	})(message);
}