const mongoose = require('mongoose');  
const Schema   = mongoose.Schema;
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const app = express();

// const taskSchema = new Schema({ 
//   task: { type: String },
// });

// module.exports = mongoose.model('Task', taskSchema);




// router.post('/new', (req, res) => {
//     Task.create({
//         task: req.body.task,
//     }, (err, task) => {
//         if (err) {
//           console.log('CREATE Error: ' + err);
//           res.status(500).send('Error');
//         } else {
//           res.status(200).json(task);
//         }
//     });
// });

// router.route('/:id')
//     /* DELETE */
//     .delete((req, res) => {
//         Task.findById(req.params.id, (err, task) => {
//           if (err) { 
//             console.log('DELETE Error: ' + err);
//             res.status(500).send('Error');
//           } else if (task) {
//             task.remove( () => {
//               res.status(200).json(task);
//             });
//           } else {
//             res.status(404).send('Not found');
//           }
//         });
//     });

// module.exports = router;



//mongodb://nodeuser:nodeuser@54.186.188.145:27017/nodedb?replicaSet=rs
mongoose.connect('mongodb://nodeuser:nodeuser@localhost:27017/nodedb?replicaSet=rs',{ "useNewUrlParser": true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));

db.once('open', () => {
  app.listen(9000, () => {
    console.log('Node server running on port 9000');
  });

  const taskCollection = db.collection('sensors');
  const changeStream = taskCollection.watch();

  changeStream.on('change', (change) => {
    console.log(change);
  });


});


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/api', api);



