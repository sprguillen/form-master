const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DocumentsSchema = new Schema({
  documentId: {
    type: String,
    required: true,
    max: 50
  },
  systemHeader: {
    createdDate: {
      type: Date,
      default: Date.now
    },
    updatedDate: {
      type: Date,
      default: Date.now
    }
  },
  components: [Object],
  description: {
    type: String,
    required: true,
    max: 100
  }
});

module.exports = Documents = mongoose.model('documents', DocumentsSchema);