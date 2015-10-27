(function() {
	angular.module('todo').factory('loginService', ['$resource',function($resource){
		return $resource('api/login', {}, {
			query: {method:'GET', params:{}, isArray:true},
			update : {method:'PUT'}
		});
	}]);
})();