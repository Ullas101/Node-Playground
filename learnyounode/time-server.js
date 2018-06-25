var net = require('net');
var date = new Date();

function twoDigit(arg){
	if(Math.floor(arg/10) == 0){
		return '0' + arg;
	}
	//Simpler and better version
	// return (arg < 10 ? '0' : '') + arg;
	return arg
}

var server = net.createServer(function (socket){
	socket.write(date.getFullYear()+'-'+twoDigit(date.getMonth()+1)+'-'+twoDigit(date.getDate())+' '+date.getHours()+':'+date.getMinutes()+'\n');
	socket.end();
});
server.listen(parseInt(process.argv[2]));
