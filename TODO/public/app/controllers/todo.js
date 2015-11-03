(function() {
	angular.module('todo').controller('todosCtrl',todosCtrl);
	
	function todosCtrl(todosService){
		var vm = this;
		
		/*declare all vm variables here*/
		vm.todoText = "";
		vm.todos=[];
		
		/*declare all vm functions here*/
		vm.addTodo = addTodo;
		vm.removeTodo = removeTodo;
		vm.markItDone = markItDone;
		
		function init(){
			vm.todos = todosService.query();
		}
		init();
		
		/* All function definition*/
		function addTodo(){
			var addTodoReqParam = {};
			addTodoReqParam.todoId = new Date().getTime();
			addTodoReqParam.todoText = vm.todoText;
			addTodoReqParam.isDone = false;
			addTodoReqParam.createDate = new Date();
			addTodoReqParam.createUserId = 1;
			addTodoReqParam.updateDate = null;
			
			vm.todoText = "";
			todosService.save({},addTodoReqParam,function(data){
				init();
			});
		};
		
		function removeTodo(todoId){
			todosService.remove({'todoId':todoId},{},function(data){
				init();
			});
		};
		
		function markItDone(todo){
			todo.isDone = true;
			todosService.update({'todoId':todo.todoId},todo,function(data){
				init();
			});
		};
		
	}
})();