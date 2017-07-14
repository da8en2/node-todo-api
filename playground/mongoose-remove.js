const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '596939b0a19e6b9a133ccb89'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('596939b0a19e6b9a133ccb89').then((doc) => {
  console.log(doc);
})
