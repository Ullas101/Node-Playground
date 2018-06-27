//variable declared using var keyword have scope that is global if defined outside functions or visible throughout the function
function testScopeOfVariable(){
	console.log(i); // this will not generate reference error but output undefined as i is visible but not intialized.
	{
		var i = 8; // even though it is defined inside the scope it will be available outside the scope.
	}
	
	console.log(i);
}

testScopeOfVariable();

//variables declared using let keyword are local to the scope and the subscope they are defined in.
function testScopeOfLetVariable(){
	{
		let j = 10; //the variable j will be visible in only this scope
	}
	try{
		console.log(i); //this will throw referenced error as i is only visible inside the above scope
	}
	catch(e){
		if(e instanceof ReferenceError){
			console.log('Reference error generated');
		}
	}
}

testScopeOfLetVariable();


//Variable with global scope can be used within functions 
//variables declared with let outside functions cannot be prefixed with 'this.' thus making them unaccessible inside functions
let a = 'Hello';
var b = 'World';

function callVarsWithinFunction(){
	console.log(a);
	console.log(b);
}

callVarsWithinFunction();
