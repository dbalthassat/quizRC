export function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('game', {
			url: '/',
			templateUrl: 'game/game.html',
			controller: 'GameController',
			controllerAs: 'game'
		});
	$urlRouterProvider.otherwise('/');
}
