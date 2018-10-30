var express = require('express');
var path = require('path');
var bodyParsser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var sensors = require('./routes/sensors');

// var net = require('net');

var port = 3000;
var app = express();

app.set('views', path.join(__dirname,'views'));
app.set('vew engine','ejs');
app.engine('html',require('ejs').renderFile);


app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  next();
});


app.use(express.static(path.join(__dirname,'client')));

app.use(bodyParsser.json());
app.use(bodyParsser.urlencoded({extended:false}));

//app.use('/',index);
app.use('/',index);
app.use('/api',tasks);
app.use('/api',sensors);


server = app.listen(port, function () {
	console.log('Server started on port:'+ port);
} );

// var io = require("socket.io")(server);

// //listen on every connection
// io.on('connection', (socket) => {
// 	console.log('New user connected')

// 	//default username
// 	socket.username = "Anonymous";

//     //listen on change_username
//     socket.on('change_username', (data) => {
//         socket.username = data.username
//     })

//     //listen on new_message
//     socket.on('new_message', (data) => {
//         //broadcast the new message
//         io.sockets.emit('new_message', {message : data.message, username : socket.username});
//     })

//     //listen on typing
//     socket.on('typing', (data) => {
//     	socket.broadcast.emit('typing', {username : socket.username})
//     })
//     socket.on('data', (data) => {
//     	console.log('Received: ' + data);
//     })
// });


// var nsp = io.of('/e5b6f00b2bd6b2bb');
// nsp.on('connection', function(socket){
//   console.log('someone connected');
//       socket.on('data', (data) => {
//     	console.log('Received: ' , data);
//     })
// });




// io.on('connection', function(socket){
//   socket.on('data', function(id, msg){
//   	// console.log(id,msg);
//   	// console.log(socket.id);
//     // socket.broadcast.to(id).emit('my message', msg);
//     socket.emit(id, {"data":{"action":0}} );

//     // io.sockets.emit('new_message', {msg});

//   });
// });




