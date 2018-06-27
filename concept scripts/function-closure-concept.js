//normal functions are objects which can be assigned to variables
function addTwoNumbers(arg1, arg2){
	return arg1 + arg2;
}

var a = addTwoNumbers;

console.log(a( 4, 5));//This will add the 2 numbers

//closures are returned/passed inner functions that retain their lexical environment.
function outerFunction(arg1){
	return function innerFunction(arg2){ //this is a closure as the innner function will be returned. it will retain lexical information (ie the local variables of the outer function)
		return arg1 + ' ' + arg2;
	}
}

var b = outerFunction('Hello');
console.log(b('World'));//This will retain the lexical information , so the value of Hello is stored in arg1 and is accessed as such when the clousre is called.

