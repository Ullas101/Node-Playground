var fs = require('fs');
var file = process.argv[2];
var rawData = fs.readFileSync(file);
var data = rawData.toString();
var noOfNewLines = data.split('\n').length - 1;
console.log(noOfNewLines);