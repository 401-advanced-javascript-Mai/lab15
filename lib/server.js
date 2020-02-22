'use strict';

// our install depandecies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();
const authRouter = require('../auth/router.js')
const categoriesRoutes= require('../api_routes/categories-routes.js')
const ProductRoutes = require('../api_routes/products-routes.js')
const loqRequest = require('../middleware/logger.js');
const timestamp = require('../middleware/timestamp.js');
const error404 = require('../middleware/404.js');
const error500 = require('../middleware/500.js');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


// middleware 
app.use(loqRequest);
app.use(timestamp)

// routes for api 
app.use('/api/v1', categoriesRoutes);
app.use('/api/v1' , ProductRoutes);
// auth route
app.use(authRouter)

// error handler
app.use(error404);
app.use(error500);

module.exports = {
    server: app,
    start: port => {
      let PORT = port || process.env.PORT || 3000;
      app.listen(PORT, () => console.log(` I am a live : ${PORT}`));
    },
  };