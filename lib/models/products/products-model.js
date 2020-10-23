'use strict';

const schema = require('./products-schema.js');
const DataModel = require('../mongo-model');

class Products extends DataModel { }


module.exports = new Products(schema);
