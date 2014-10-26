function simpleTimeout(consoleTimer){
	console.timeEnd(consoleTimer);
}
console.time("oneSecond");
setTimeout(simpleTimeout,1000,"oneSecond");
console.time("oneSecond1");
setTimeout(simpleTimeout,1000,"oneSecond1");
console.time("oneSecond2");
setTimeout(simpleTimeout,1000,"oneSecond2");
console.time("twoSecond");
setTimeout(simpleTimeout,2000,"twoSecond");