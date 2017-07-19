// load in mongoose (library)
const mongoose = require('mongoose');

// load in validator
const validator = require('validator');

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

// create the mongoose model for user
var User = mongoose.model('User', UserSchema);

// export the model
module.exports = {User};
