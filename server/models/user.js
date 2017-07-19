// load in mongoose (library)
const mongoose = require('mongoose');

// load in validator
const validator = require('validator');

// load in jsonwebtoken
const jwt = require('jsonwebtoken');

const _ = require('lodash');

// create mongoose schema
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email.'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      require: true
    },
    token: {
      type: String,
      require: true
    }
  }]
});

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
};

// do not use arrow function because that wouldn't give access to this keyword!
UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'someSecretSalt').toString();

  user.tokens.push({access, token});

  return user.save().then(() => {
    return token;
  });
};

// create the mongoose model for user
var User = mongoose.model('User', UserSchema);

// export the model
module.exports = {User};
