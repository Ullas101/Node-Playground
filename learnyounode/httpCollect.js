var http = require('http');
var  url =  process.argv[2];

//Approach 1 without libraries

/*
http.get(url, function(response){
	var httpRes = '';
	response.setEncoding('utf-8');
	response.on('data', function(data){
		httpRes += data;
	});
	response.on('error', console.error);
	response.on('end', function(){
		console.log(httpRes.length);
		console.log(httpRes);
	});
});
*/


//Approach 2 with using module bl
var bl = require('bl');
http.get(url, function (response){
	response.pipe(bl(function(err, data){
		if(err){
			console.log('Error occured during reading response from url:'+url);
			return;
		}
		else{
			console.log(data.length);
			console.log(data.toString());
		}
	}));
});
				  
				 
			