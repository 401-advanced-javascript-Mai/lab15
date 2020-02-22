'use strict';

// our install depandecies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

const categoriesRoutes= require('../api_routes/categories-routes.js')
const ProductRoutes = require('../api_routes/products-routes.js')

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


// routes for api 
app.use('/api/v1', categoriesRoutes);
app.use('/api/v1' , ProductRoutes);

module.exports = {
    server: app,
    start: port => {
      let PORT = port || process.env.PORT || 3000;
      app.listen(PORT, () => console.log(` I am a live : ${PORT}`));
    },
  };