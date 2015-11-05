var todoController = require('../controllers/todo.server.controller');
//var ensureAuthenticated = require('../utilities/ensure.authenticated');

module.exports = function(app,passport){
	app.route('/api/todos').post(passport.authenticate('jwt',{session:false}),todoController.add).get(passport.authenticate('jwt',{session:false}),todoController.list);
	app.route('/api/todos/:todoId').get(passport.authenticate('jwt',{session:false}),todoController.read).put(passport.authenticate('jwt',{session:false}),todoController.update).delete(passport.authenticate('jwt',{session:false}),todoController.remove);
	app.param('todoId',todoController.getById);
}