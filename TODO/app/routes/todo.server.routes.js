var todoController = require('../controllers/todo.server.controller');

module.exports = function(app){
	app.route('/api/todos').post(todoController.add).get(todoController.list);
	app.route('/api/todos/:todoId').get(todoController.read).put(todoController.update).delete(todoController.remove);
}