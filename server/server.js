// this file will only be responsible for routes!
// LIBRARY IMPORTS:
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

// LOCAL INMPORTS:
// pull off the mongoose property using ES6 destructuring
// esentially creating a local variable called mongoose equal
// to the mongoose property on the object thats the return result
// from require
var {mongoose} = require('./db/mongoose.js');

var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();
const port = process.env.PORT || 3000;

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
  });
});

// GET /todos/1212321
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // validate id using isValid
  if (!ObjectID.isValid(id)) {
    // 404 - send back empty send
    return res.status(404).send();
  }

  // findById
  Todo.findById(id).then((todo) => {
    if (!todo) {
      // if no todo - send back 404 with empty body
      return res.status(404).send();
    }
    // success - if todo - send it back
    res.status(200).send({todo});
  }).catch((e) => {
    // 400 Error and send back empty body
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
