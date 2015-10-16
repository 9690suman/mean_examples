var todos = [];

var todo1 = {};
todo1.todoId = new Date().getTime();
todo1.todoText = "Get Egg!";
todo1.isDone = false;
todo1.createDate = new Date();
todo1.createUserId = 1;
todo1.updateDate = null;

var todo2 = {};
todo2.todoId = new Date().getTime();
todo2.todoText = "Get Milk!";
todo2.isDone = true;
todo2.createDate = new Date();
todo2.createUserId = 1;
todo2.updateDate = null;


todos.push(todo1);
todos.push(todo2);

exports.list = function(req,res){
	res.send(todos);
};

exports.add = function(req,res){
	var todo = req.body;
	todos.push(todo);
	res.send('Todo saved successfully');
};

exports.read = function(req,res){
	
};

exports.update = function(req,res){
	var todoId = req.params.todoId;
	var todo=req.body;
	for(var i=0;i<todos.length;i++ ){
		if(todos[i] && todos[i].todoId==todoId){
			todos[i] = todo;
		}
	};
};

exports.remove = function(req,res){
	var todoId = req.params.todoId;
	for(var i=0;i<todos.length;i++ ){
		if(todos[i] && todos[i].todoId==todoId){
			todos.splice(i,1);
		}
	};
	res.send('Todo Removed Successfully!');
};