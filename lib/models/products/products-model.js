'use strict';

require('mongoose');
const schema = require('./products-schema.js');

class Products {
  constructor () {
    this.schema = schema;
  }

  read(idNum) {
    if (idNum) {
      return this.schema.find({_id: idNum});
    } else {
      return this.schema.find({});
    }
  }

  create(obj) {
    let newCat = new this.schema(obj);
    return newCat.save()
  }

  update(idNum, toChange) {
    return this.schema.updateOne({_id: idNum}, toChange, function (err, docs) {} )
  }

  delete(idNum) {
    return this.schema.deleteOne({_id: idNum}, function (err) {})
  }
}

module.exports = Products;