'use strict';

const users = require('./user-model.js');

module.exports = (capability) => {

  return (req, res, next) => {
    try{
      console.log('req.user.role', req.user.role);
      if (users.checkCpabilities(capability, req.user.role)) {
        next();
      } else {
        next('Access Denied');
      }
    }catch (e) {
      console.log(e);
    }
  };
};