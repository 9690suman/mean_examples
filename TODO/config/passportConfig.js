var passport = require('passport');
var session = require('express-session');
var localStrategy = require('./localStrategy.js');
var createSendToken = require('./jwt.js');

module.exports= function(app){
	
	app.use(session({ secret: 'sshhh!!!', resave: false, saveUninitialized: false})); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions

	passport.serializeUser(function (user, done) {
		/*done(null, user.id);*/
		done(null, user);
	});

	/*passport.deserializeUser(function(id, cb) {
		db.users.findById(id, function (err, user) {
			if (err) { return cb(err); }
			cb(null, user);
		});
	});*/
	
	passport.deserializeUser(function(user, done) {
		done(null, user);
	});

	passport.use('local-register', localStrategy.register);
	passport.use('local-login', localStrategy.login);

	app.post('/auth/signup', passport.authenticate('local-register'), function (req, res) {
		//emailVerification.send(req.user.email);
		createSendToken(req.user, res);
		//res.send('user created successfully!');
	});


	app.post('/auth/login', passport.authenticate('local-login'), function (req, res) {
		createSendToken(req.user, res);
	});
}