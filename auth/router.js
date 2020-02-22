'use strict';

const express = require('express');
const router = express.Router();
const basicAuth = require('./basic-auth-middleware.js');
const users = require('../auth/user-model.js');
const oauth = require('../auth/Oauth-middleware.js')
const bearerOuth = require('./bearer-auth.js')

router.use(express.static('./public'));

router.post('/signup', signUp);
router.post('/signin', basicAuth,bearerOuth, signIn);
router.get('/user',basicAuth, getUsers);  
router.get('/oauth',oauth , getoauth)
router.get('/secret', bearerOuth , getBearer)


//////////////////////// /sign up 
function signUp  (req, res , next){
  // console.log('req.body', req.body);
  new users(req.body).save()
  
  
    .then((user) => {
      // console.log('user')
      let token = users.generateToken();
      res.status(200).send(token);
    }).catch(err => console.error(err));
}


//////////////// sign in 
function signIn(req, res , next){
  res.status(200).send(req.token);
    
}

/////////////////// /user
function getUsers(req , res , next){
    
  users.find()
    .then(records =>{
      res.status(200).send(records );
    });   
}

//////////////// oauth 
 function getoauth( req , res , next){
    res.status(200).send(req.token);
 }
  function getBearer(req ,res, next){
    res.status(200).json(req.user);
  };




module.exports = router; /* eslint-disable no-undef */