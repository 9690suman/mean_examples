(function() {
	'use strict';

	angular.module('ems', [ 'ui.router','ems.addEmployee','ems.login' ]);
	
	angular.module('ems').config(['$logProvider', '$stateProvider', '$urlRouterProvider', function ($logProvider, $stateProvider, $urlRouterProvider) {
		
		$logProvider.debugEnabled(true);
		$urlRouterProvider.otherwise('/login');
		$stateProvider.state("home", {
			templateUrl:"app/templates/home.html",
			url:"/home"
		});
		
	}]).run(function ($state,$rootScope) {
	    $rootScope.$state = $state;
	});
	

})();