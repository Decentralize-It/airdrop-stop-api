const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express()
const mongoose = require('mongoose');
const routes = require('./routes')
const url = require('./models/').url

const run = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(cookieParser());
  await mongoose.connect(url)
  app.use(routes)
  app.listen(3000, 'LIVE ON 3000')
};
