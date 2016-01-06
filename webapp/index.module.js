import { config } from './index.config';
import { routerConfig } from './index.route';
import { constants } from './index.constants';

import { socketFactory } from './socket/socket.factory';

import { GameController } from './game/game.controller';

angular.module('quizRC', ['ngMessages', 'restangular', 'ui.router'])
	.constant('config', constants())
	.config(config)
	.config(routerConfig)
	.factory('socketFactory', socketFactory)
	.controller('GameController', GameController);
