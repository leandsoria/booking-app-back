const mongoose = require('mongoose');

const Hotel = require('./models/hotel');
const User = require('./models/user');
const MD_USERNAME = 'leandro';
const MD_PASSWORD = 'leandro123';
const MD_DATA_BASE = 'bookingApp';

mongoose.set('strictQuery', false);
mongoose
  .connect(
    `mongodb+srv://${MD_USERNAME}:${MD_PASSWORD}@cluster0.9donjip.mongodb.net/${MD_DATA_BASE}?retryWrites=true&w=majority`
  )
  .then(() => console.log('--- Connected to database ---'))
  .catch(() => console.log('Connection failed!'));

const createHotel = async (req, res, next) => {
  const createdHotel = new Hotel({
    id: req.body.id,
    name: req.body.name,
    stars: req.body.stars,
  });
  const result = await createdHotel.save();

  res.json(result);
};

const createNewUser = async (req, res, next) => {
  const newUser = new User({
    user: {
      name: req.body.user.name,
      surename: req.body.user.surename,
      email: req.body.user.email,
      password: req.body.user.password,
      accountType: req.body.user.accountType,
    },
  });
  const result = await newUser.save();
  res.json(result);
};

const getHotels = async (req, res, next) => {
  const hotels = await Hotel.find().exec();
  res.json(hotels);
};

exports.createHotel = createHotel;
exports.getHotels = getHotels;
exports.createNewUser = createNewUser;
