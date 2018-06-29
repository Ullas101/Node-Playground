//EXECUTE FILE AFTER RUNNING writeStreamConcept.js
var fs = require('fs');
var fileContent;

var fileReadStream = fs.createReadStream('Sample.txt');
fileReadStream.setEncoding('utf-8');

//Everytime a chunk of data is read by OS , this event is triggered and the corresponding callback function is executed
//Since OS might take time , this event is emitted only when the event loop is being executed.
fileReadStream.on('data', function (chunk){
	fileContent += chunk;
});

//This thing is called after we have finished reading from source and the stream is closed
fileReadStream.on('end', function(){
	console.log('finished reading from file, printing its content:');
	console.log(fileContent);
});

//If any error occcurs then this event is triggered
fileReadStream.on('error', function(){
	console.log('Error occurred while reading from file');
});

//This thing is executed even before the 1st chunk of data is read since OS including things are looked after by event loop
for( var i = 0; i < 2000; i++){ 
	console.log('This will be printed before the read operation finishes');
}
