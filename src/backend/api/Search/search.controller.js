const searchService = require('./search.service');

exports.saveResult = (result) => {
	searchService.saveResult(result);
};
