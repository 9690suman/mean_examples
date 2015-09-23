(function() {
	'use strict';

	angular.module('ems.addEmployee', [ 'ui.router' ])
	.config(['$logProvider', '$stateProvider', '$urlRouterProvider', function ($logProvider, $stateProvider, $urlRouterProvider) {
		$stateProvider.state("addEmployee", {
			template:"This is add employee Page!!",
			url:"/addEmployee"//,
			//controller:"addEmployeeCtrl",
			//controllerAs:"addEmployee"
		});
	}]);

})();