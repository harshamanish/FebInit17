var express = require('express');

var app = express();
app.use('/app', express.static('src'));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/name', function (req, res) {
  res.send({name:"Jagadeesh"});
});

app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
})