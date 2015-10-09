(function() {
	'use strict';

	angular.module('ems.login')
	.controller('loginCtrl', loginCtrl);

	function loginCtrl() {
		var vm = this;
		vm.hello = "this is hello on vm!!"
	}

})();