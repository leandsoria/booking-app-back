const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');

const mongoPractice = require('./mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('This is the API main URL');
});

/* To login */
app.post('/login', (req, res, next) => {
  res.send('Logged!');
});
/* To signup */
app.post('/signup', mongoPractice.createNewUser);

app.get('/hotels', mongoPractice.getHotels);
app.post('/add-hotel', mongoPractice.createHotel);

app.listen(PORT, () => {
  console.log('Server started on port 5000');
});
