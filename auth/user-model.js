/* eslint-disable no-unused-vars */
'use strict';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

let SECRET = 'cool mai';

const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'guest', enum: [ 'admin', 'guest', 'user' ] },
});




//   Hash the plain text password given before you save a user to the database
users.pre('save', async function (user) {
    this.password = await bcrypt.hash(this.password, 5);
  
  });

//   Method to authenticate a user using the hashed password
users.statics.authenticateBasic = async function(user, password) {
  let foundUser = await this.find({ username: user });

  if (foundUser) {
    let valid = bcrypt.compare(password, foundUser[0].password);
    return valid ? foundUser[0] : Promise.reject();
  } else {
    Promise.reject();
  }
};



//   Method to generate a Token following a valid login
users.statics.generateToken = function(user) {
  let userInfo = {
    username: this.username,
    password: this.password,
    role: this.role,
  };

  let token = jwt.sign(userInfo, SECRET);
  return token;
};



module.exports = mongoose.model('users', users);