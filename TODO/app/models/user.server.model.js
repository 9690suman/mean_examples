var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
	email: { type: String, unique: true, lowercase: true },
	password: { type: String, select: false },
	displayName: String,
	picture: String,
	facebook: String,
	foursquare: String,
	google: String,
	github: String,
	instagram: String,
	linkedin: String,
	live: String,
	yahoo: String,
	twitter: String,
	twitch: String
});

userSchema.pre('save', function(next) {
	var user = this;
	console.log(user);
	if (!user.isModified('password')) {
		console.log("inside is modified");
		return next();
	}
	bcrypt.genSalt(10, function(err, salt) {
		console.log('inside genSalt');
		bcrypt.hash(user.password, salt,null, function(err, hash) {
			console.log('inside hash');
			user.password = hash;
			next();
		});
	});
});

userSchema.methods.comparePassword = function(password, done) {
	bcrypt.compare(password, this.password, function(err, isMatch) {
		done(err, isMatch);
	});
};

module.exports = mongoose.model('User', userSchema);