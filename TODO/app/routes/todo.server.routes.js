var todoController = require('../controllers/todo.server.controller');
//var ensureAuthenticated = require('../utilities/ensure.authenticated');

module.exports = function(app,passport){
	app.route('/api/todos').post(todoController.add).get(passport.authenticate('jwt'),todoController.list);
	app.route('/api/todos/:todoId').get(todoController.read).put(todoController.update).delete(todoController.remove);
	app.param('todoId',todoController.getById);
}