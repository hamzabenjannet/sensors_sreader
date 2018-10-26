var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
//var db = mongojs('mongodb://mongouser:mongouser@192.168.52.128:27017/tasklist',['tasks']);
var db = mongojs('mongodb://nodered_user:nodered_user@54.186.188.145:27017/nodered',['tasks']);


// get all
router.get('/tasks', function (req,res,next) {


	//res.send('tasks api');
	db.tasks.find( function (err,tasks) {
		if(err){
			res.send(err);
		}else{
			res.json(tasks);
		}
	} )
});



// get single
router.get('/tasks/:id', function (req,res,next) {
	//res.send('task api');
	db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function (err,task) {
		if(err){
			res.send(err);
		}else{
			res.json(task);
		}
	} )
});


// save
router.post('/task', function (req,res,next) {
	var task = req.body;
	if (!task.title || (task.isDone+'') ) {
		res.status(400);
		res.json({
			"error":"bad data"
		})
	}else{
		db.tasks.save(task, function (err, task) {
			if(err){
				res.send(err);
			}else{
				res.json(task);
			}
		})
	}
})

// delete
router.delete('/tasks/:id', function (req,res,next) {
	//res.send('task api');
	db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function (err,task) {
		if(err){
			res.send(err);
		}else{
			res.json(task);
		}
	});
});

// update
router.put('/tasks/:id', function (req,res,next) {
	var task = req.body;
	var updtask = {};

	if (task.isDone) {
		updtask.isDone =task.isDone;
	}
	if (task.title) {
		updtask.title =task.title;
	}

	if (!updtask) {
		res.status(400);
		res.json({
			"error":"bad data"
		})
	}else{
		db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updtask,{}, function (err,task) {
			if(err){
				res.send(err);
			}else{
				res.json(task);
			}
		} );

	}
});



module.exports = router;