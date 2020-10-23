'use strict';

const express = require('express');
const app = express();
const completeRouter = require('./routes/api.js');
const params = require('./middleware/params.js');
const timestamp = require('./middleware/timestamp.js');
const error404 = require('./middleware/404.js');
const error500 = require('./middleware/500.js');
const logger = require('./middleware/logger.js');

app.use(express.json(), express.urlencoded({extended: true}), timestamp, logger);
app.use(params);
app.use('/', completeRouter);
app.use(error404);
app.use(error500);


module.exports = app;

