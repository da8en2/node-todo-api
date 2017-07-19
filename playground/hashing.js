// const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');
// check out jwt.io to decode tokens and get documentation

var data = {
  id: 10
};

var token = jwt.sign(data, 'mySecretSalt');
console.log(token);

var decoded = jwt.verify(token, 'mySecretSalt');
console.log('decoded:', decoded);

var decoded = jwt.verify(token, 'wrongSecretSalt');
console.log('decoded:', decoded);

// var message = 'I am user number 3';
//
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);


// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) +'someSecretSalt').toString()
// }
//
//
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data) +'i dont know the salt').toString();
//
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'someSecretSalt').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('!!! Data was changed !!!')
// }

// all this can be done with JWS - JSON web token!!!
