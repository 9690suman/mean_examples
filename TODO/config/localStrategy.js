var User = require('../app/models/user.server.model.js');
var LocalStrategy = require('passport-local').Strategy;

var strategyOptions = {
		usernameField: 'email'
		//session:false
};

exports.login = new LocalStrategy(strategyOptions, function (email, password, done) {

	var searchUser = {
			email: email
	};

	User.findOne(searchUser, function (err, user) {
		if (err) return done(err);

		if (!user) return done(null, false, {
			message: 'Wrong email/password'
		});

		user.comparePassword(password, function (err, isMatch) {
			if (err) return done(err);

			if (!isMatch) return done(null, false, {
				message: 'Wrong email/password'
			});

			return done(null, user);
		});
	})
});

exports.register = new LocalStrategy(strategyOptions, function (email, password, done) {

	var searchUser = {
			email: email
	};

	User.findOne(searchUser, function (err, user) {
		if (err) return done(err);

		if (user) {
			return done(null, false, {
				message: 'email already exists'
			});
		}

		var newUser = new User({
			email: email,
			password: password
		});

		newUser.save(function (err) {
			done(null, newUser);
		})
	});
});