function funct_outer(){
	console.log("outer_function");
	function inner_function(){
		console.log("inner_function");
	};
};

funct_outer();