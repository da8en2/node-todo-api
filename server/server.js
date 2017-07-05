var mongoose = require('mongoose');

// mongoose does callbacks by default, change to promises here
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// create the mongoose model
var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// // create a new todo
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// // save it to database
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

// create a new todo
var newTodo2 = new Todo({
  text: 'Paint Garagedoor',
  completed: false,
  completedAt: 2232444
});

// save it to database
newTodo2.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save todo', e);
});
