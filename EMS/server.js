process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config');
var express = require('./config/express');

var mongoose = require('mongoose');                     // mongoose for mongodb
var app = express();

// configuration =================

//mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io

// listen (start app with node server.js) ======================================

app.listen(config.port);

module.exports = app;

console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);


