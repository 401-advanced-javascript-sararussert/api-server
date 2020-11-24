'use strict';

const schema = require('./toDo-schema.js');
const DataModel = require('../mongo-model');

class ToDo extends DataModel { }


module.exports = new ToDo(schema);
