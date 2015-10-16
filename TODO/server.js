process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var expressConfig = require('./config/expressConfig');

//Initializes the express app!!
var app = expressConfig();

module.exports = app;