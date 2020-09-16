const schema = require('../schema/category-schema');
const Model = require('./dynamicModel.js');

/**
 * this is class extend to model so can acess the CRUD method 
 */
//// here i make a category to be extend to the dynamic model so it can use the crud method  
class Category extends Model {
  constructor() {
    super(schema);
  }
}

module.exports =  Category ;