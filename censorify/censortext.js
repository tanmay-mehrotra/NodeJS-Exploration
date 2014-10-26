var censoredwords = ["sad","bad","mad"];
var customCensoredwords = [];
function censor(inStr){
	for(idx in censoredwords){
		inStr = inStr.replace(censoredwords[idx], "****");
	}
	for(idx in customCensoredwords){
		inStr = inStr.replace(customCensoredwords[idx], "****");
	}
	return inStr;
}

function addCensoredWords(word){
	customCensoredwords.push(word);
}

function getCensoredWords(){
	return censoredwords.concat(customCensoredwords);
}

exports.censor = censor;
exports.addCensoredWords = addCensoredWords;
exports.getCensoredWords = getCensoredWords;