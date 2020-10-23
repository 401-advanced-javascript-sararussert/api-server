'use strict';

const schema = require('./categories-schema.js');
const DataModel = require('../mongo-model');

class Categories extends DataModel { }


module.exports = new Categories(schema);