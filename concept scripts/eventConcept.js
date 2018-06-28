const EventEmitter =  require('events');
//Listener function should be registered before the event is triggered else there will be no listener function to handle the event.
const myEvent = new EventEmitter();

myEvent.on('start', function firstFunc (){
	console.log(this._events);	//this points to myEvent instance of EventEmitter class
	});
	
myEvent.on('start', function secFunc () {
	console.log('Hello');
	});

myEvent.on('start', thirdFunc);
	
myEvent.on('start', (a, b) =>{
	console.log(a + ' ' + b);
	console.log(this) // is an empty object, if arrow => is used this points to an empty object
	});

myEvent.emit('start', 'arg1', 'arg2'); //all the listening functions will be called

console.log('This should print after the events have been triggered');

function thirdFunc (){
	console.log('World');
	}