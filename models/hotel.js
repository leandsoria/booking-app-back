const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  stars: { type: Number, required: true },
  address: {
    street: String,
    number: Number,
    CP: Number,
  },
  location: {
    city: String,
    state: String,
  },
  testimonials: [{ autor: String, copy: String }],
  images: [{ url: String, title: String }],
  scoring: { score: Number, votes: Number },
  description: String,
  advantages: [String],
});

module.exports = mongoose.model('Hotel', hotelSchema);
