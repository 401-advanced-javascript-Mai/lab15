

'use strict' ;
/**
 * this function is a middleware give me the date and console log it 
 * @param {object} req 
 * @param {object} res 
 * @param {functions} next 
 */
let timestamp = (req , res , next )=>{
  let time = new Date() ;
  req.requestTime = time ;
  console.log(time);
  next();
};

module.exports = timestamp ;