const mongoose = require('mongoose');
const User = mongoose.model('User', {
  name: String,
  username: String,
  email: String,
  password: String
})
const Link = mongoose.model('Link', {
  name: String,
  ticker: String,
  url: String
})

module.exports = { User, Link }
