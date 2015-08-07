var employeesController = require('../controllers/employees.server.controllers');

module.exports = function(app){
	app.route('/api/employees').get(employeesController.list);

}