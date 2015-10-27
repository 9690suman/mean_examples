(function(){
	'use strict';
	
	angular.module('todo', ['ui.router','ngResource','satellizer']);
	
	angular.module('todo').config(['$logProvider', '$stateProvider', '$urlRouterProvider', function ($logProvider, $stateProvider, $urlRouterProvider) {
		$logProvider.debugEnabled(true);
		$urlRouterProvider.otherwise('/login');
		$stateProvider.state("todos", {
			templateUrl:"app/templates/todos.html",
			url:"/todos",
			controller: "todosCtrl",
			controllerAs : "todos"
		}).state("login", {
			templateUrl:"app/templates/login.html",
			url:"/login",
			controller: "loginCtrl",
			controllerAs : "login"
		}).state("register", {
			templateUrl:"app/templates/register.html",
			url:"/register",
			controller: "registerCtrl",
			controllerAs : "register"
		});
	}]);
	
})()