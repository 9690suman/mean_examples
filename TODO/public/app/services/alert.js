(function() {
	angular.module('todo').service('alert', ['$rootScope','$timeout',function($rootScope,$timeout){
		var alertTimeout;
		return function(type,title,message,timeout){
			$rootScope.alert = {
				isShown : true,
				show : true,
				type : type,
				message : message,
				title : title
			};
			$timeout.cancel(alertTimeout);
			alertTimeout = $timeout(function(){
				$rootScope.alert.show = false;
			},timeout || 2000);
		};
	}]);
})();