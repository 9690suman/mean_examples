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
			controllerAs : "todos",
			data:{
				isAuthRequired : true
			}
		}).state("reports", {
			//controller: "logoutCtrl",
			//controllerAs : "logout",
			url:"/reports",
			template:"this is reports page",
			data:{
				isAuthRequired : true
			}
		}).state("login", {
			templateUrl:"app/templates/login.html",
			url:"/login",
			controller: "loginCtrl",
			controllerAs : "login",
			data:{
				isAuthRequired : false
			}
		}).state("register", {
			templateUrl:"app/templates/register.html",
			url:"/register",
			controller: "registerCtrl",
			controllerAs : "register",
			data:{
				isAuthRequired : false
			}
		}).state("logout", {
			controller: "logoutCtrl",
			controllerAs : "logout",
			data:{
				isAuthRequired : false
			}
		});
	}]);

	angular.module('todo').run(function ($rootScope,$auth,alert) {

		$rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
			var isAuthRequired = toState.data.isAuthRequired;
			if (isAuthRequired && !$auth.isAuthenticated()) {
				alert('danger','Unauthorized','Please Login/Register first!!');
				event.preventDefault();
				// get me a login modal!
			}
		});

	});

})()