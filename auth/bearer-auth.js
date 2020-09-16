'use strict' ;
const users = require('./user-model.js');

module.exports = (req , res , next) =>{

  if (!req.headers.authorization){(e) =>{console.log(e);};}
  let token = req.headers.authorization.split(' ').pop();

  users.authbearerToken(token)
    .then(validUser =>{
      console.log('validUser authbearer token' , validUser);
      req.user = validUser ;
      // console.log(req.user)
      // console.log("user", user)
      next();
    }).catch(err => next(err));
};