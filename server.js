var express = require('express');
var path = require('path');
var bodyParsser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var sensors = require('./routes/sensors');

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

app.use('/',index);
app.use('/api',tasks);
app.use('/api',sensors);



app.listen(port, function () {
	console.log('Server started on port:'+ port);
} )

// mongodb://localhost:27017/tasklist