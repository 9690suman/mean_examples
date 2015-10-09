(function() {
	'use strict';

	angular.module('ems.login', [ 'ui.router' ])
	.config(['$logProvider', '$stateProvider', '$urlRouterProvider', function ($logProvider, $stateProvider, $urlRouterProvider) {
		$stateProvider.state("login", {
			templateUrl:"app/templates/login.html",
			url:"/login",
			controller:"loginCtrl",
			controllerAs:"login"
		});
	}]);

})();