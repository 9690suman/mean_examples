var TodoMongoose = require('mongoose').model('Todo');

module.exports = {
		list : list,
		add : add,
		read : read,
		update : update,
		remove : remove,
		getById : getById
};

function list(req,res){
	var userId = req.user._id;
	console.log(userId);
	TodoMongoose.find({createUserId:userId},function(err,todos){
		if(err){
			return next(err);
		}else{
			res.json(todos);
		}
	});
};
function add(req,res){
	var userId = req.user._id;
	console.log(userId);
	req.body.createUserId = userId;
	var todo = new TodoMongoose(req.body);
	todo.save(function(err){
		if(err){
			return next(err);
		}else{
			res.json(todo);
		}
	});
};
function read(req,res){
	res.json('Read Successfull!');
};
function update(req,res){
	var id = req.todo._id;
	var todo = req.body;
	todo.updateDate = new Date();
	TodoMongoose.findByIdAndUpdate(id,todo,function(err,todo){
		if(err){
			return next(err);
		}else{
			res.json('Todo Updated Successful!');
		}
	});
};
function remove(req,res){
	req.todo.remove(function(err){
		if(err){
			return next(err);
		}else{
			res.send('Todo Removed Successfully!');
		}
	})
};
function getById(req, res, next, param) {
	TodoMongoose.findOne({todoId:param},function(err,todo){
		if(err){
			return next(err);
		}else{
			req.todo = todo;
			next();
		}
	})
};