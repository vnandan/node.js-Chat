client = require('socket.io').listen(8080).sockets;

client.on('connection',function(socket){
	socket.on('input',function(data){
		console.log(data);
		socket.emit('output',data['message']);
		client.emit('output',data['message']);
	});
	console.log('new connection');
});