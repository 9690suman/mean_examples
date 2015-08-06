var mongoose  = require('mongoose');

var Employee = {};
Employee.firstName = 'String';

mongoose.model('Employee', Employee);