var express = require('express');
var router = express.Router();

router.get('/', function (req,res,next) {
	//res.send('index page');
	res.render('index.html');
	// res.status(401);
	// res.send('unauthorized');
});

module.exports = router;