process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var expressConfig = require('./config/expressConfig');
var mongooseConfig = require('./config/mongooseConfig');

//Initializes the Mongoose
var db = mongooseConfig();

//Initializes the express app!!
var app = expressConfig();


module.exports = app;