var express = require('express');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var dbOperation = null;


MongoClient.connect('mongodb://localhost:27017/todo', function (err, db) {
  if (err) throw err
	   dbOperation = db;
	   
})

var app = express();
app.use('/app', express.static('src'));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/todo', function (req, res) {
	dbOperation.collection('todo').find().toArray(function (err, result) {
    if (err) throw err
		res.send(result);
    })
});

app.get('/name', function (req, res) {
  res.send({name:"Jagadeesh"});
});

app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
})