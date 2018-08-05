const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

router.get('/getUser', userController.getUser);
router.post('/saveUser', userController.saveUser);
router.get('/logout', (req, res) => {
	res.redirect('/');
});

module.exports = router;
