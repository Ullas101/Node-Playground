var listOfFilteredFilesModule = require('./getListOfFilteredFiles');
var dir =  process.argv[2];
var filter = process.argv[3];

function listFilteredFiles(error, data){
	if(error){
		console.log('Error occured in reading dir:'+ dir);
	}
	else{
		data.forEach(function (filename){
			console.log(filename);
		});
	}
}

listOfFilteredFilesModule(dir, filter, listFilteredFiles);