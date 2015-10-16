exports.index = function(req,res){
	console.log('Inside index function!!');
	res.sendFile('index.html',{root:'./public/'});
};
