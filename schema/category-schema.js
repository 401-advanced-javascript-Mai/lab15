

'use strict';


const mongoose = require('mongoose');
// require the product schema 
require('./product-schema.js')
/**
 * this is the schema for category 
 * place where we handle the information and organized
 */
const category = mongoose.Schema({
  name : { type: String, required: true},
},{ toObject: { virtuals: true }, toJSON: { virtuals: true },
  
});

/**
 * this clarify where the two schema connect as one virtual schema
 */
category.virtual('the_all_product', {

  ref: 'product',
  localField: 'name',
  foreignField: 'categoryType',
  justOne: false,
  
});
  
/**
   * @param { object} virtual_schema
   */
function join() {
  try {
    this.populate('the_all_product');
  }
  catch(err){ throw Error;}
}
category.pre('find', join);
category.pre('findOne', join);

module.exports = mongoose.model('category', category);