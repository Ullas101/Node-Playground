var fs =  require('fs');

var i = 0;

var fileWriteStream = fs.createWriteStream('Sample.txt');//creates write stream (object) for the destination

var inputString = 'Hello World';

//finish event is called when the end function() begins close of string, this will be emitted and handled by event loop after script execution finishes
//since some part of it is taken up by OS and node tries to make it non blocking.
fileWriteStream.on('finish', function (){
	console.log('This printed since we finished writing into the file');
});

//close event is called when the stream is finally closed (can be done by end() - preferable or destroy())
//since closing on the destination is handled by OS this event is also emitted in event loop
fileWriteStream.on('close', function(){
	console.log('This is printed since we closed the fileWriteStream');
});

//drain event is emitted once the buffer is drained of data after it becomes full, sine it is OS who is consuming and writing data into the file
//to make it nonblocking this event is also emitted and handled by event loop after script execution finishes.
fileWriteStream.on('drain', function(){
	console.log('This is called when the buffer is emptied and we can resume writing into the stream');
	writeToFile();
});

//If any error occurred this event is emitted.
fileWriteStream.on('error', function(){
	console.log('An error occurred in execution');
});

function writeToFile(){
	for(i; i <2000; i++){
		if(!fileWriteStream.write(inputString+'\n')){// the writing is synchronous
			break;
		}
		console.log('something written into the file-' + i);
	}
	if(i == 2000){
		fileWriteStream.end();
		//fileWriteStream.destroy();-not needed as end function closes the stream after emitting finish event
	}
}

writeToFile();

//this will be called before writing to data to file is done as when buffer is complete we wait for drain event
console.log('This is after the write operation');
