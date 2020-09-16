  
'use strict' ;


const mongoose = require('mongoose');
// require the categories  schema 

/**
 * this is the schema for product 
 * place where we handle the information and organized
 */

const product = mongoose.Schema({
  name: { type: String, required: true },
  thePrice: {type: Number , required :true},
  categoryType: {type: String , required: true},
} , { toObject: { virtuals: true}, toJSON: { virtuals: true }});
  
module.exports = mongoose.model('product', product);