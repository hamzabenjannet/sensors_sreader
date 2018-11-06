var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var mongoose = require('mongoose');  


//var db = mongojs('mongodb://admin:imaxeam001@54.186.188.145:27017/admin',['sensors']);
var db = mongojs('mongodb://admin:admin@localhost:27017/dashboard?replicaSet=rs');


mongoose.connect('mongodb://admin:admin@localhost:27017/dashboard?replicaSet=rs',{ "useNewUrlParser": true });
const watch_db = mongoose.connection;

watch_db.on('error', console.error.bind(console, 'Connection Error:'));

watch_db.once('open', () => {
  // app.listen(3000, () => {
  //   console.log('Node server running on port 3000');
  // });
  console.log('connected db');

  const sensorsCollection = watch_db.collection('devices');
  const changeStream = sensorsCollection.watch();

  changeStream.on('change', (change) => {
    // console.log(change.updateDescription.updatedFields);
    var data_object = change.updateDescription;
    if (gsocket.socket!=null) {

    	// console.log("_id:                  ", gsocket._id);
    	// console.log("change.documentKey._id", change.documentKey._id);

    	if (gsocket._id.toString() == change.documentKey._id.toString()) {
    		gsocket.socket.emit('data', data_object);
    		
    	}
    	
    }
    
});


});

// get all
router.get('/sensors', function (req,res,next) {


	//res.send('sensors api');
	
	db.devices.find( function (err,sensors) {
		if(err){
			res.send(err);
		}else{
			res.json(sensors);
		}
	} )
});



// get single by insert ID
router.get('/sensors/:id', function (req,res,next) {
	//res.send('sensor api');
	db.devices.findOne({_id: mongojs.ObjectId(req.params.id)}, function (err,sensor) {
		if(err){
			res.send(err);
		}else{
			res.json(sensor);
		}
	} )
});

var gsocket = {};

// get single by device ID and emit on socketIO
router.get('/sensors/device/ws/:id', function (req,res,next) {



	// console.log(req.params.id);

	db.devices.find({device_id: req.params.id } , function (err,sensor) {
		if(err){
			res.send(err);
		}else{
			// res.json(sensor);

			if (sensor.length) {
				if (sensor[0].device_id==req.params.id) {
					
					gsocket._id = sensor[0]._id;

					var io = require("socket.io")(server);
					var nsp = io.of('/s/'+req.params.id);
					nsp.on('connection', function(socket){
						console.log(req.params.id,' connected');
						gsocket.socket = socket;

						socket.on('disconnect', function(){ 
							console.log(req.params.id,' disconnected');
							delete gsocket.socket;
							gsocket.socket = null;
						});
						socket.on('data', (data) => {
							console.log('Received: ' , data);
						})
					});

					res.render('sensor_data.html');

				}else{
					res.send("Err: 1");
				}
			}else{
				res.send("Err: 0");
			}



		}
	} )

	



	// res.render('sensor_data.html');

	// db.devices.find({device_id: req.params.id } , function (err,sensor) {
	// 	if(err){
	// 		res.send(err);
	// 	}else{
	// 		res.json(sensor);
	// 	}
	// } )



	// db.devices.findOne({device_id: mongojs.ObjectId(req.params.id)}, function (err,sensor) {
	// 	if(err){
	// 		res.send(err);
	// 	}else{
	// 		res.json(sensor);
	// 	}
	// } )
});

// get single by device ID 
router.get('/sensors/device/:id', function (req,res,next) {
	db.devices.find({device_id: req.params.id } , function (err,sensor) {
		if(err){
			res.send(err);
		}else{
			if (sensor.length) {
				if (sensor[0].device_id==req.params.id) {

					res.json(sensor[0]);
				}
			}
		}
	} )
});


// create 
router.post('/sensors', function (req,res,next) {
	var device = req.body;
	
	device = {
		device_id: device.device_id
	}
	db.devices.save(device, function (err, sensor) {
		if(err){
			res.send(err);
		}else{
			res.json(sensor);
		}
	})
	// if (!sensor.title || (sensor.isDone+'') ) {
	// 	res.status(400);
	// 	res.json({
	// 		"error":"bad data"
	// 	})
	// }else{
	// 	db.devices.save(sensor, function (err, sensor) {
	// 		if(err){
	// 			res.send(err);
	// 		}else{
	// 			res.json(sensor);
	// 		}
	// 	})
	// }
})

// delete
router.delete('/sensors/:id', function (req,res,next) {
	//res.send('sensor api');
	db.devices.remove({_id: mongojs.ObjectId(req.params.id)}, function (err,sensor) {
		if(err){
			res.send(err);
		}else{
			res.json(sensor);
		}
	});
});

// update by insert ID
router.put('/sensors/:id', function (req,res,next) {
	var sensor_id = req.params.id;
	var sensor_data = req.body;

	db.devices.findAndModify({
		query: { _id: sensor_id },
		update: { $set: { d: sensor_data.d } },
		new: true
	}, function (err, sensor, lastErrorObject) {
		if(err){
			res.send(err);
		}else{
			res.json(sensor);
		}
	})
});
// update by device ID
router.put('/sensors/device/:id', function (req,res,next) {
	var sensor_id = req.params.id;
	var sensor_data = req.body;

	db.devices.findAndModify({
		query: { device_id: sensor_id },
		update: { $set: { d: sensor_data.d } },
		new: true
	}, function (err, sensor, lastErrorObject) {
		if(err){
			res.send(err);
		}else{
			res.json(sensor);
		}
	})

});













module.exports = router;