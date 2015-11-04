(function() {
	angular.module('todo').controller('registerCtrl',registerCtrl);

	function registerCtrl($state,$auth,alert){
		var vm = this;

		/*declare all vm variables here*/


		/*declare all vm functions here*/
		vm.register = register;

		/* All function definition*/
		function register(){
			var user = {
					email:vm.username,
					password:vm.password
			};

			$auth.signup(user)
			.then(function (res) {
				alert('success', 'Account Created & Signed In!', 'Welcome, ' + res.data.user.email + '!.');
				$auth.setToken(res.data.token);
				$state.go('todos');
			})
			.catch(function (err) {
				alert('warning', 'Unable to create account :(', err.data.message);
			});
		}

	}
})();