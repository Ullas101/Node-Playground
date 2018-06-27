var a; //since a is not intialized undefined value will be given

console.log('a is ' + a) //this will print out undefined

var b = null //here b is intialized to value null

console.log('b is ' + b) //this will print out null

//undefined is akin to empty whereas null is specific value

//null and undefined behave similarly

a = 2;
b = 2;
console.log('a is  ' + a);
console.log('b is ' + b);
//both will print out 2

//since they behave similarly below will print out true
a = undefined;
b = null;
console.log('a == b  is ' + (a == b))

//However their types are different
console.log(typeof a); //type is undefined
console.log(typeof b); //null is special object, type is object
console.log('a === b  is  ' + (a === b));