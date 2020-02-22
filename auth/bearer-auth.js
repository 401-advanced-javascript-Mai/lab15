// 'use strict' ;
// const users = require('./users.js');

// module.exports = (req , res , next) =>{

//   if (!req.headers.authorization){(e) =>{console.log(e);};}
//   let token = req.headers.authorization.split(' ').pop();

//   users.authbearerToken(token)
//     .then(validUser =>{
//       console.log('validUser authbearer token' , validUser);
//       req.user = validUser ;
//       next();
//     }).catch(err => next(err));
// };