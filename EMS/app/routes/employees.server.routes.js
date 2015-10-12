var employeesController = require('../controllers/employees.server.controller');

module.exports = function(app){
	app.route('/api/employees').get(employeesController.list);

};