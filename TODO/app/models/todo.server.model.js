var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
	todoId : String,
	todoText : String,
	isDone : Boolean,
	createDate : Date,
	createUserId : String,
	updateDate : Date
});

mongoose.model('Todo',TodoSchema);