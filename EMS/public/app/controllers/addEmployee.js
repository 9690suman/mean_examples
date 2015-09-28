(function() {
	'use strict';

	angular.module('ems.addEmployee')
	.controller('addEmployeeCtrl', addEmployeeCtrl);

	function addEmployeeCtrl() {
		var vm = this;
		vm.hello = "this is hello on vm!!"
	}

})();