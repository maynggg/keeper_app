const mongoose = require('mongoose');

const { Schema } = mongoose;

// Setup schema
const noteSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});
// Export Note model
module.exports = mongoose.model('Note', noteSchema);
