require('./connect');

const bodyParser = require('body-parser');
const userRoute = require('../api/Users/user.route');
const searchRoute = require('../api/Search/search.route');

module.exports.appStarted = (app) => {
	app.use(bodyParser());
	app.use([userRoute, searchRoute]);
	/*   app.use((req, res, next)=>{
    res.status(404).send('404_error_template', {title: "Sorry, page not found"});
  });*/
};
