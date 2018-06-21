var path = require('path');
var fs = require('fs');
var dir = process.argv[2];
var filter = '.' +  process.argv[3];

function displayFilteredFiles(error, list){
	if(error){
		console.log('An error occurred in reading the directory');
		return;
	}
	list = list.filter(function(filename){
		return filter === path.extname(filename);
	});
	for( var i = 0; i < list.length; i++){
		console.log(list[i]);
	}
}

fs.readdir(dir, displayFilteredFiles);

/* Alternate Solution

var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
*/