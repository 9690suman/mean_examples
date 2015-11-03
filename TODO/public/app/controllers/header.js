(function() {
	angular.module('todo').controller('headerCtrl',headerCtrl);
	
	function headerCtrl($scope,$auth){
		
		/*declare all $scope variables here*/
		
		
		/*declare all $scope functions here*/
		$scope.isAuthenticated = isAuthenticated;
		
		
		/* All function definition*/
		function isAuthenticated(){
			return $auth.isAuthenticated();
		}
		
	}
})();