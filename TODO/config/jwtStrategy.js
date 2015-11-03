var User = require('../app/models/user.server.model.js');
var JwtStrategy = require('passport-jwt').Strategy;
var opts = {}
opts.secretOrKey = 'shhh..';
opts.authScheme = 'Bearer';
/*opts.issuer = "accounts.examplesoft.com";
opts.audience = "yoursite.net";*/

module.exports = new JwtStrategy(opts, function(jwt_payload, done) {
    var userId = jwt_payload.sub;
	User.findOne({_id: userId}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
            // or you could create a new account
        }
    });
})