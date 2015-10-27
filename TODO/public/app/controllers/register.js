(function() {
	angular.module('todo').controller('registerCtrl',registerCtrl);

	function registerCtrl($auth,alert){
		var vm = this;
		alert('success','Register Page!','hi!!!!!!!!!!!!!!!!!!!!!!!!!');

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
				alert('success', 'Account Created!', 'Welcome, ' + res.data.user.email + '! Please email activate your account in the next several days.');
			})
			.catch(function (err) {
				alert('warning', 'Unable to create account :(', err.message);
			});
		}

	}
})();