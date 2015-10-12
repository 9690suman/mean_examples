var config = require('./config');
var mongoose  = require('mongoose');

module.exports = function(){
	var db = null;
	//db = mongoose.connect(config.db);
	require('../app/models/employee.server.model');
	console.log('inside mongoose config');
	return db;
};