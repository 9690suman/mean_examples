var express  = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


module.exports = function(){
	var app = express();

	app.use(express.static('./public'));                 // set the static files location /public/img will be /img for users
	
	app.use(morgan('dev'));                                         // log every request to the console
	
	app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
	app.use(bodyParser.json());                                     // parse application/json
	app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
	
	app.use(methodOverride());

	return app;
}