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
	User.find(userData, (err, data) => {
		if (err) {
			res.send({ error: err });
		} else {
			if(data.length){
				res.send(data);
			}else{
				res.send({ error: 'user not found' })
			}
		}
	});
};
