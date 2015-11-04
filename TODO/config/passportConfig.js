var passport = require('passport');
var session = require('express-session');
var localStrategy = require('./localStrategy.js');
var jwtStrategy = require('./jwtStrategy.js')
var createSendToken = require('./jwt.js');

module.exports= function(app){

	//app.use(session({ secret: 'sshhh!!!', resave: false, saveUninitialized: false})); // session secret
	app.use(passport.initialize());
	//app.use(passport.session()); // persistent login sessions

	passport.serializeUser(function (user, done) {
		console.log('inside passport.serializeUser');
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
		console.log('inside passport.deserializeUser');
		done(null, user);
	});

	passport.use('local-register', localStrategy.register);
	passport.use('local-login', localStrategy.login);

	passport.use(jwtStrategy);

	/*app.post('/auth/signup', passport.authenticate('local-register',{session:false}), function (req, res) {
		//emailVerification.send(req.user.email);
		createSendToken(req.user, res);
		//res.send('user created successfully!');
	});*/

	app.post('/auth/signup', function(req, res, next) {
		passport.authenticate('local-register', function(err, user, info) {
			if(err){
				return next(err);
			}
			if(!user){
				return res.status(401).send(info);
			}
			createSendToken(user, res);
		})(req, res, next);
	});


	/*app.post('/auth/login', passport.authenticate('local-login',{session:false}), function (req, res) {
		createSendToken(req.user, res);
	});*/

	app.post('/auth/login', function(req, res, next) {
		passport.authenticate('local-login', function(err, user, info) {
			if(err){
				return next(err);
			}
			if(!user){
				return res.status(401).send(info);
			}
			createSendToken(user, res);
		})(req, res, next);
	});



	return passport;
}