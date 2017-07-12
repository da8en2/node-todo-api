// load in mongoose (library)
var mongoose = require('mongoose');

// create the mongoose model for user
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// export the model
module.exports = {User};
