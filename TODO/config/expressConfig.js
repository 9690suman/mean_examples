var express  = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var config = require('./config');

module.exports = function(){
	var app = express();
	
	/*express configuration as per your requirements*/
	app.use(express.static('./public'));                 // set the static files location /public/img will be /img for users
	
	app.use(morgan('dev'));                                         // log every request to the console
	
	app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
	app.use(bodyParser.json());                                     // parse application/json
	app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
	
	app.use(methodOverride());
	/*express configuration ends*/
	
	/*Add all your routes below*/
	//require('../app/routes/index.server.routes.js')(app);
	
	
	/* Return the Express app for using in the server.js */
	
	app.listen(config.port);
	console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);
	return app;
	
};