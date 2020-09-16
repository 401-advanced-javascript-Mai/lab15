  
'use strict';

const timestamp = require('./timestamp');
/** this function give details about the type of method that used and the path which acsses 
 * @param { object}req
 */
module.exports =(req,res, next)=>{
  console.log('request info :' , req.method , req.path , timestamp);
  next ();
};