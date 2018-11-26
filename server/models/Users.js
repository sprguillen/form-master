const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UsersSchema = new Schema({
    name: String,
    email: String,
    password: String,
    userId: {
      type: String,
      required: true,
      max: 50
    },
    createdDate: {
      type: Date,
      default: Date.now
    }
});

module.exports = Users = mongoose.model('users', UsersSchema);