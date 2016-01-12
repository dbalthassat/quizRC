export function GameController($log, config, socketFactory) {
	'ngInject';
	var socket = socketFactory.buildSocket(config.wsServer);
	socket.connect(function() {
		$log.debug('connected');
	}, function() {
		$log.debug('error');
	});
}
