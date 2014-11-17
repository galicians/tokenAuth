var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();

app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next();
})

var User = mongoose.model('User', {
  email: String,
  password: String
})

app.post('/register', function(req, res) {
  var user = req.body;
  console.log(user)

  var newUser = new User({
    email: user.email,
    password: user.password
  })

  newUser.save(function(err){
    res.status(200).json(newUser);
  })

})

mongoose.connect('mongodb://localhost/tokenauth')

var server = app.listen(3000, function() {
  console.log('api listening on', server.address().port)
})