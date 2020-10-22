'use strict';

const express = require('express');
const app = express();
const categoryRouter = require('../routes/categories.js');
const productRouter = require('../routes/products.js')
const timestamp = require('./middleware/timestamp.js');
const error404 = require('./middleware/404.js');
const error500 = require('./middleware/500.js');
const logger = require('./middleware/logger.js');

app.use(express.json(), express.urlencoded({extended: true}), timestamp, logger);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);
app.use(error404);
app.use(error500);


module.exports = app;

