(function() {
	'use strict';

	angular.module('ems.addEmployee', [ 'ui.router' ])
	.config(['$logProvider', '$stateProvider', '$urlRouterProvider', function ($logProvider, $stateProvider, $urlRouterProvider) {
		$stateProvider.state("addEmployee", {
			templateUrl:"app/templates/addEmployee.html",
			url:"/addEmployee",
			controller:"addEmployeeCtrl",
			controllerAs:"addEmployee"
		});
	}]);

})();