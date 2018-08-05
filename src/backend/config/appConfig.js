require('./connect');

const bodyParser = require('body-parser');
const userRoute = require('../api/Users/user.route');

module.exports.appStarted = (app) => {
	app.use(bodyParser());
	app.use([userRoute]);
	/*   app.use((req, res, next)=>{
    res.status(404).send('404_error_template', {title: "Sorry, page not found"});
  });*/
};
