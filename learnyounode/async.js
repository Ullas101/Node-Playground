var http = require('http');
var bl = require('bl');
var listOfurls = [];
var results = [];
var count =0;

function intializeUrl(list){
	list.push(process.argv[2]);
	list.push(process.argv[3]);
	list.push(process.argv[4]);
}

function displayUrlContent(){
	if(count === 3){
		for(var i = 0; i < 3; i++){
			console.log(results[i]);
		}
	}
}

function getUrlContent( index){
	http.get(listOfurls[index], function(response){
	response.pipe( bl(function(err, data){
		if(err)
			console.error('Error occured in accessing url:'+listOfurls[i]);
		else{
				results[index] = data.toString();
				count++;
				displayUrlContent();
			}
	}));
	});
}

intializeUrl(listOfurls);

for(var i = 0; i<3; i++){
	getUrlContent(i);
}

