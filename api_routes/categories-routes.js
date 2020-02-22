'use strict' ;

const express = require('express');

const categories = require('../model/category-model.js');
const router = express.Router();

// the categories route with CRUD method 
router.get('/categories', getCategories);
router.get('/categories/:_id', getByIdCategories);
router.post('/categories', postCategories);
router.put('/categories/:_id', UpdateCategories);
router.delete('/categories/:_id', deleteCategories);


/**
 * This function get the information after acsses route and send the result as object 
 * which means reterive all items
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
let category  = new categories 
// ROUTE function which handle the information 
function getCategories(req, res, next) {
    // expects an array of object to be returned from the model
    category.get()
      .then(data => {
        const output = {
          count: data.length,
          results: data,
        };
        res.status(200).json(output);
      })
      .catch(next);
  }
  
  /**
   * this function get an one item 
   * which mean retrive one item
   * @param {object} req 
   * @param {object} res 
   * @param {functions} next 
   */
  function getByIdCategories(req, res, next) {
    // expects an array with the one matching record from the model
    category.get(req.params._id)
      .then(result => res.status(200).json(result))
      .catch(next);
  }
  
  /**
   * this functions create an item and add to database
   * @param {object} req 
   * @param {object} res 
   * @param {functions} next 
   */
  function postCategories(req, res, next) {
    // expects the record that was just added to the database
    category.create(req.body)
      .then(result => res.status(201).json(result))
      .catch(next);
  }
  
  /**
   * this function can update (change )the information in database 
   * @param {object} req 
   * @param {object} res 
   * @param {functions} next 
   */
  function UpdateCategories(req, res, next) {
    // expects the record that was just updated in the database
    category.update(req.params._id, req.body)
      .then(result => res.status(200).json(result))
      .catch(next);
  }
  
  
  /**
   * this function delete an item 
   * @param {object} req 
   * @param {object} res 
   * @param {functions} next 
   */
  
  
  function deleteCategories(req, res, next) {
    // Expects no return value (resource was deleted)
    category.delete(req.params._id)
      .then(result => res.status(200).json(result))
      .catch(next);
  }
  
  module.exports = router;
