const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const mongoURI =
  process.env.mongoURI || 'mongodb://localhost:27017/node-paginate';

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

var mainRoutes = require('./routes/main');
app.use(mainRoutes);

app.use(express.static('public'));

app.listen(3000, () => console.log('Server started'));
