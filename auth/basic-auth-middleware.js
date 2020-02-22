'use strict';

const base64 = require('base-64');
const users = require('./user-model.js');

module.exports = (req, res, next) => {

  if(!req.headers.authorization) { next('invalid login'); return; }

  let basic = req.headers.authorization.split(' ').pop(); 
  let [user, password] = base64.decode(basic).split(':');

  users.authenticateBasic(user, password)
    .then(validUser => {     
      req.token = users.generateToken(validUser);
      req.user = validUser;   
      next();
    })
    .catch( err => next('invalid login'));
};