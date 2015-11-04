(function() {
	angular.module('todo').controller('loginCtrl',loginCtrl);

	function loginCtrl($state,$auth,alert){
		var vm = this;

		/*declare all vm variables here*/


		/*declare all vm functions here*/
		vm.login = login;

		/* All function definition*/
		function login(){
			var user = {
					email:vm.username,
					password:vm.password
			};

			$auth.login(user)
			.then(function(res) {
				alert('success', 'Signed In!', 'Welcome, ' + res.data.user.email + '!.');
				// Redirect user here after a successful log in.
				$state.go('todos');
			})
			.catch(function(err) {
				// Handle errors here, such as displaying a notification
				// for invalid email and/or password.
				alert('warning', 'Login Unsuccessful!', err.data.message);
			});
		};

	}
})();