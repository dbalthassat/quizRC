export function GameController(config, socketFactory) {
	'ngInject';
	var socket = socketFactory.buildSocket(config.wsServer);
	socket.connect(function() {
		console.log('connect');
	}, function() {
		console.log('error');
	});
}
