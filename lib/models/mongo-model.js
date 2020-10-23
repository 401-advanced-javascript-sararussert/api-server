'use strict';

require('mongoose');

class Model {
  constructor (schema) {
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
    let newRec = new this.schema(obj);
    return newRec.save()
  }

  update(idNum, toChange) {
    return this.schema.updateOne({_id: idNum}, toChange, function (err, docs) {} )
  }

  delete(idNum) {
    return this.schema.deleteOne({_id: idNum}, function (err) {})
  }
}

module.exports = Model;