var fs = require('fs');
var path = require('path');
module.exports = function getlistOfFilteredFiles(dir, filter, cb){
	filter = "." + filter;
	fs.readdir(dir, function (error, data){
		if(error){
		 	return cb(error);
		}
		else
		{
			data =  data.filter(function (filename){
				return filter === path.extname(filename)
			});
			return cb(null, data);
		}
	});
}
			   				
