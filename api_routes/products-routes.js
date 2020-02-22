'use strict';

const express = require('express');

const products = require('../model/product-model.js');

const router = express.Router();

// products api routes for CRUD method

// Routes
router.get('/products', getProducts);
router.get('/products/:_id', geByIdtProduct);
router.post('/products', postProducts);
router.put('/products/:_id', updateProducts);
router.delete('/products/:_id', deleteProducts);

let product = new products

/**
 * This function get the information after acsses route and send the result as object 
 * which means reterive all items
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
function getProducts(req, res, next) {
  // expects an array of objects back
  product.get()
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
function geByIdtProduct(req, res, next) {
  // expects an array with one object in it
  product.get(req.params._id)
    .then(result => res.status(200).json(result[0]))
    .catch(next);
}
/**
 * this functions create an item and add to database
 * @param {object} req 
 * @param {object} res 
 * @param {functions} next 
 */
  
function postProducts(req, res, next) {
  // expects the record that was just added to the database
  product.create(req.body)
  // console.log('req.body', req.body)
    .then(result =>res.status(201).json(result))
    
    .catch(next);
}
  
/**
 * this function can update (change )the information in database 
 * @param {object} req 
 * @param {object} res 
 * @param {functions} next 
 */
function updateProducts(req, res, next) {
  // expects the record that was just updated in the database
  product.update(req.params._id, req.body)
    .then(result => res.status(200).json(result))
    .catch(next);
}

/**
 * this function delete an item 
 * @param {object} req 
 * @param {object} res 
 * @param {functions} next 
 */
function deleteProducts(req, res, next) {
  // Expects no return value (the resource should be gone)
  product.delete(req.params._id)
    .then(result => res.status(200).json(result))
    .catch(next);
}

module.exports = router ;