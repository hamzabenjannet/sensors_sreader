var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
//var db = mongojs('mongodb://admin:imaxeam001@54.186.188.145:27017/admin',['sensors']);
var db = mongojs('mongodb://nodeuser:nodeuser@54.186.188.145:27017/nodedb?replicaSet=rs');

// get all
router.get('/sensors', function (req,res,next) {


	//res.send('sensors api');
	
	db.sensors.find( function (err,sensors) {
		if(err){
			res.send(err);
		}else{
			res.json(sensors);
		}
	} )
});



// get single
router.get('/sensors/:id', function (req,res,next) {
	//res.send('sensor api');
	db.sensors.findOne({_id: mongojs.ObjectId(req.params.id)}, function (err,sensor) {
		if(err){
			res.send(err);
		}else{
			res.json(sensor);
		}
	} )
});


// save
router.post('/sensor', function (req,res,next) {
	var sensor = req.body;
	if (!sensor.title || (sensor.isDone+'') ) {
		res.status(400);
		res.json({
			"error":"bad data"
		})
	}else{
		db.sensors.save(sensor, function (err, sensor) {
			if(err){
				res.send(err);
			}else{
				res.json(sensor);
			}
		})
	}
})

// delete
router.delete('/sensors/:id', function (req,res,next) {
	//res.send('sensor api');
	db.sensors.remove({_id: mongojs.ObjectId(req.params.id)}, function (err,sensor) {
		if(err){
			res.send(err);
		}else{
			res.json(sensor);
		}
	});
});

// update
router.put('/sensors/:id', function (req,res,next) {
	var sensor = req.body;
	var updsensor = {};

	if (sensor.isDone) {
		updsensor.isDone =sensor.isDone;
	}
	if (sensor.title) {
		updsensor.title =sensor.title;
	}

	if (!updsensor) {
		res.status(400);
		res.json({
			"error":"bad data"
		})
	}else{
		db.sensors.update({_id: mongojs.ObjectId(req.params.id)},updsensor,{}, function (err,sensor) {
			if(err){
				res.send(err);
			}else{
				res.json(sensor);
			}
		} );

	}
});



		module.exports = router;