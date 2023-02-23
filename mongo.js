const MD_USERNAME = 'leandro';
const MD_PASSWORD = 'leandro123';
const MD_DATA_BASE = 'bookingApp';

const url = `mongodb+srv://${MD_USERNAME}:${MD_PASSWORD}@cluster0.9donjip.mongodb.net/${MD_DATA_BASE}?retryWrites=true&w=majority`;

const MongoClient = require('mongodb').MongoClient;

const signUpUser = async (req, res, next) => {
  const newUser = {
    username: req.body.username,
    email: req.body.email,
  };

  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db();
    const result = await db.collection('users').insertOne(newUser);
  } catch (err) {
    return res.json({ message: 'Could not store new User' });
  }

  client.close();
  res.json(newUser);
};

const getHotels = async (req, res, next) => {
  const client = new MongoClient(url);
  let hotels;
  try {
    await client.connect();
    const db = client.db();
    hotels = await db.collection('hotels').find().toArray();
  } catch (err) {
    return res.json('Could not retrieve hotel data.');
  }
  client.close();

  res.json(hotels);
};

exports.signUpUser = signUpUser;
exports.loginUser = signUpUser;
exports.getHotels = getHotels;
