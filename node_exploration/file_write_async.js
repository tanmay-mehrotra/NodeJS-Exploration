var fs = require('fs');
var fruitBowl = ['apple', 'orange', 'banana', 'grapes'];
function writefruit(fd){
	if(fruitBowl.length){
		var fruit = fruitBowl.pop() + " ";
		fs.write(fd, fruit, null, null, function(err,bytes){
			if(err){
				console.log("file not found");
			}
			else{
				console.log("wrote: %s %dbytes", fruit, bytes);
				writefruit(fd);
			}
		});
	}else{
		fs.close(fd);
	}
}

fs.open('fruit.txt','w',function(err,fd){
	writefruit(fd);
});