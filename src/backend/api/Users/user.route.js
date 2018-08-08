const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

router.post('/checkUser', userController.getUser);
router.post('/saveUser', userController.saveUser);
router.get('/logout', (req, res) => {
	res.redirect('/');
});
router.get('/fetchUser', userController.fetchUser);


module.exports = router;
