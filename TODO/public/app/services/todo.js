(function() {
	angular.module('todo').factory('todosService', ['$resource',function($resource){
		return $resource('api/todos/:todoId', {}, {
			query: {method:'GET', params:{}, isArray:true},
			update : {method:'PUT'}
		});
	}]);
})();