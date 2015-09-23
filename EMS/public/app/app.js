(function() {
	'use strict';

	angular.module('ems', [ 'ui.router','ems.addEmployee' ]);
	
	/*angular.module('ems').config([function () {
		console.log('inside ems config');
	}]);*/
	
	angular.module('ems').config(['$logProvider', '$stateProvider', '$urlRouterProvider', function ($logProvider, $stateProvider, $urlRouterProvider) {
		
		$logProvider.debugEnabled(true);
		$urlRouterProvider.otherwise('/home');
		$stateProvider.state("home", {
			template:"This is HOME Page!!",
			url:"/home"//,
			//controller:"addEmployeeCtrl",
			//controllerAs:"addEmployee"
		});
		
	}]);
	

})();