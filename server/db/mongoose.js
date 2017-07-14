var mongoose = require('mongoose');

// mongoose does callbacks by default, change to promises here
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

// module.exports = {
//   mongoose: mongoose;
// }

// ES6 shorthand:
module.exports = { mongoose };
