const mongoose = require('mongoose');
const stringRequired = { type: String, required: true };

const userSchema = new mongoose.Schema({
  user: {
    name: stringRequired,
    surename: stringRequired,
    email: stringRequired,
    password: stringRequired,
    // accountType: stringRequired,
    newMessages: Number,
  },
  hotels: {
    bookmarkAmount: Number,
    bookmarks: [{ id: String }],
    hotelBooked: [{ id: String }],
  },
  flights: { String },
  carRental: { String },
  tours: { String },
});

module.exports = mongoose.model('User', userSchema);
