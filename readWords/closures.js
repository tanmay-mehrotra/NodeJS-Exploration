function funct(){
	var arr = new Array(4);
	for(var i=0;i < arr.length ; i++){
		arr[i] = function closure(){
			var j = i;  
			console.log(" j " + j);
		}
	}
	return arr;
}

arr = funct();
for(var k = 0 ; k < 4 ; k++){
	arr[i];
}