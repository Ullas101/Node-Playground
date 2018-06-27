//Standard javascript error
//try and catch block can only be used when the process throws the error ( and when custom error instance of Error is thrown)
//and not from async function or from EventEmitter
try{
	var result = 34 / i;
	console.log(result);
	}
catch(e){ //this identifier scope is limited to the catch block and is assigned to the error which is thrown.
	if(e instanceof  ReferenceError) // Example of conditional exception, if none of the conditions match generic error block executed
	{
		console.log('Reference error occured :'+e.message); //message property prints the text description of error 
	}
	else{
		console.log('This generic catch block executed when the no match with condtional catch block');
	}
}

//Asynchronous javascript error
var fs = require('fs');
fs.readFile('Non existent file', function(err, data){
	if(err)
	{
		console.log('System generated error- asynchronous API:'+err.stack);// stack property prints the stack trace of the error
	}
	else{
		console.log('This will not be executed as error will occur');
	}
});

fs.readFile('Non existent file', function(err, data){ // Error thrown inside function will cause the nodejs process to crash unless 
	if(err) 										  // handler for 'uncaughtException' event of process is present
	{
		throw err; // will cause the nodejs process to fail unless handler present.
	}
	else{
		console.log('This will not be executed as error will occur');
	}
});

process.on('uncaughtException', ()=>{
	console.log('This will capture the error thrown by async call back function');
	});

// Instances of EventEmitter will emit 'error' event when they encounter an error
var fileSourceStream = fs.createReadStream('Non existent file');

fileSourceStream.on('error', function(e) {
	console.log('Error in stream caught by error event listener function');//if no 'error event listener function is present then uncaughtException event is 
																		   //raised by nodejs process.
	});


// We can create our own error objects and throw them 
var customError = new Error('Custom error created');	
try{
	throw customError;
}
catch(e){
	console.log(e.message);// This will be logged before the async message errors as eventloop executes after main thread finishes execution 
}	

	
//optionally finally block can be used with try catch block which will be executed irrespective whether or not error occurs.
	