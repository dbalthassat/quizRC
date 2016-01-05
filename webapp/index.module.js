import { config } from './index.config';
import { routerConfig } from './index.route';

angular.module('quizRC', ['ngMessages', 'restangular', 'ui.router'])
	.config(config)
	.config(routerConfig);
