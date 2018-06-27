//this function is called when the other functions are not there
function sampleFunction (){
	console.log('first Sample Function');
}

//this function is called if below 2 functions were not there
function sampleFunction(arg1, arg2, arg3){
	console.log('second sample Function');
}

//this function is called if below function was not there 
function sampleFunction(arg1, arg2, arg3, arg4){
	console.log('third sample Function');
}

//this function is called since it matched perfectly with call
function sampleFunction	(arg1, arg2, arg3, arg4, arg5){
	console.log(arg1 + ' ' + arg2 + ' ' + arg3 + ' ' + arg4 + ' ' + arg5);
}

sampleFunction(1,2,3,4,5);