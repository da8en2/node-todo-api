//const MongoClient = require('mongodb').MongoClient;
//use object destructuring instead:
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // update completed field for one object in collection
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5957311e61d8f613f7a7b391')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // change name for one user
  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID('59572dd361d8f613f7a7b213')
  // }, {
  //   $set: {
  //     name: 'Daniel'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // increment the age of one user
  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID('59572dd361d8f613f7a7b213')
  // }, {
  //   $inc: {
  //     age: +1
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // previous two in one
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59572dd361d8f613f7a7b213')
  }, {
    $set: {
      location: 'Phoenix'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
