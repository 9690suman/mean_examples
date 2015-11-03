var jwt = require('jwt-simple');
var moment = require('moment');
module.exports = ensureAuthenticated;
function ensureAuthenticated(req, res, next) {
	if (!req.headers.authorization) {
		return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
	}
	var token = req.headers.authorization.split(' ')[1];

	var payload = null;
	try {
		payload = jwt.decode(token, "shhh.."/*config.TOKEN_SECRET*/);
	}
	catch (err) {
		return res.status(401).send({ message: err.message });
	}

	if (payload.exp <= moment().unix()) {
		return res.status(401).send({ message: 'Token has expired' });
	}
	var userId = payload.sub;
	//Write code here for searching for the user from DB.
	next();
};