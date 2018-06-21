var fs = require("fs");
var filepath = process.argv[2];

fs.readFile(filepath, countLinesInFile);

function countLinesInFile(error, content){
	if(error){
		console.log('File is invalid or something went wrong while reading file');
		return;
	}
	var noOfLines = content.toString().split('\n').length - 1;
	console.log(noOfLines);
}

//console.log('Should execute before call back function');