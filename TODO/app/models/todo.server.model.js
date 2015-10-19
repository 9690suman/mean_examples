var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
	todoId : String,
	todoText : String,
	isDone : String,
	createDate : String,
	createUserId : String,
	updateDate : String
});

mongoose.model('Todo',TodoSchema);