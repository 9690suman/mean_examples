(function(){
	'use strict';
	
	angular.module('todo', ['ui.router','ngResource']);
	
	angular.module('todo').config(['$logProvider', '$stateProvider', '$urlRouterProvider', function ($logProvider, $stateProvider, $urlRouterProvider) {
		$logProvider.debugEnabled(true);
		$urlRouterProvider.otherwise('/todos');
		$stateProvider.state("todos", {
			templateUrl:"app/templates/todos.html",
			url:"/todos",
			controller: "todosCtrl",
			controllerAs : "todos"
		});
	}]);
	
})()