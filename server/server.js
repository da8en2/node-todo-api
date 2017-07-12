// this file will only be responsible for routes!
// LIBRARY IMPORTS:
var express = require('express');
var bodyParser = require('body-parser');

// LOCAL INMPORTS:
// pull off the mongoose property using ES6 destructuring
// esentially creating a local variable called mongoose equal
// to the mongoose property on the object thats the return result
// from require
var {mongoose} = require('./db/mongoose.js');

var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

// setup bodyParser as middleware
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req,res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
