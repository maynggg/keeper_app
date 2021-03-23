const mongoose = require('mongoose');

// Setup schema
const noteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
// Export Note model
module.exports = mongoose.model('note', noteSchema);
