var mongoose = require('mongoose');

// mongoose does callbacks by default, change to promises here
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// // create the mongoose model
// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });

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

// // create a new todo
// var newTodo2 = new Todo({
//   text: '    edit vacation video    '
//   // text: 'Paint Garagedoor',
//   // completed: false,
//   // completedAt: 2232444
// });

// // save it to database
// newTodo2.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

// create the mongoose model for user
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// create a new user
var newUser = new User({
  email: '   jim@bob.com'
});

// save it to database
newUser.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save user', e);
});
