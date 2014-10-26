var cars = ["ferrari", "porche", "bugatti",  "limbo", "martin"];
logCars(cars);

function logCars(cars){
	var car = cars.pop();
	logCar(car, function(){
		logCars(cars);
	});
}

function logCar(car, callback){
	console.log("saw a %s", car);
	if(cars.length){
		process.nextTick(function(){
			callback();
		});
	}

}