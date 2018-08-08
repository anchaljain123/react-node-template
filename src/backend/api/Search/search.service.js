const Result = require('./search.model');

exports.saveResult = (results) => {
	Result.insert(results, (err, data) => {});
};
