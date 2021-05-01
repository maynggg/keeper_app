const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    max: 30,
  },
  firstName: { type: String, required: true, max: 10 },
  lastName: { type: String, required: true, max: 10 },
  passwordHash: { type: String, required: true, max: 30 },
  passwordSalt: { type: String, required: true, max: 30 },
  createdAt: { type: Number, required: true, default: new Date().getTime() },
});

userSchema.methods.toJSON = function toJSON() {
  const obj = this.toObject();
  delete obj.passwordHash;
  delete obj.passwordSalt;
  delete obj.__v;
  return obj;
};

module.exports = mongoose.model('User', userSchema);
