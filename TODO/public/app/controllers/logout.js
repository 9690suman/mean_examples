(function() {
	angular.module('todo').controller('logoutCtrl',logoutCtrl);

	function logoutCtrl($state,$auth,alert){
		var vm = this;
		logout();
		/*declare all vm variables here*/


		/*declare all vm functions here*/


		/* All function definition*/

		function logout(){
			$auth.logout().then(function() {
				alert('success','Logout','You have been logged out.');
				$state.go('login');
			});
		};
		

	}
})();