//const MongoClient = require('mongodb').MongoClient;
//use object destructuring instead:
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // delete duplicate users
  // db.collection('Users').deleteMany({name: 'Dan'}).then((result) => {
  //   console.log(result);
  // });

  // delete by ObjectID
  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID("59572e3061d8f613f7a7b240")
  // }).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // });

  //db.close();
});
