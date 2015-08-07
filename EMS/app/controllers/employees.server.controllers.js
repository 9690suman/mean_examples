var Employee = require('mongoose').model('Employee');

exports.list = function(req,res){
	console.log('inside exports.list');
	/*Employee.find({},function(err,employees){
		if(err){
			res.send(err);
		}else{
			res.json(employees);
		}
	});*/
	var employees = [];
	
	var employee1 = {};
	var employee2 = {};
	var employee3 = {};
	employee1.firstName = 'suman';
	employee2.firstName = 'saru';
	employee3.firstName = 'raja'

	employees.push(employee1);
	employees.push(employee2);
	employees.push(employee3);

	res.json(employees);
};