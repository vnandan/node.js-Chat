client = require('socket.io').listen(8080).sockets;

client.on('connection',function(socket){
	socket.on('input',function(data){
		console.log(data);
	});
	console.log('new connection');
});