const User = require('./user.model');

exports.saveUser = (userData, res) => {
	const newUser = new User(userData);
	newUser.save(userData, (err, data) => {
		if (err) {
			res.send({ error: err });
		} else {
			res.send({ user: data });
		}
	});
};

exports.getUser = (userData, res) => {
	// const newUser = new User(userData);
	// newUser.find(userData, (err, data) => {
	// 	if (err) {
	// 		res.send({ error: err });
	// 	} else {
	// 		console.log("-data",data)
	// 		if(data){
	// 			res.send(data);
	// 		}else{
	// 			res.send({ error: 'not found' })
	// 		}
	// 	}
	// });
	console.log("====================00000")
};
