(function schedule(){
     setTimeout(function do_it(){
     	my_asyn_function();
     },1000);
}());


function my_asyn_function(){
	console.log("do log parsing");
}