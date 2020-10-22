'use strict'

const express = require('express');
const router = express.Router();
const Products = require('../lib/models/products/products-model.js')
let prodObj = new Products();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', add);
router.put('/:id', edit);
router.delete('/:id', deleteOne);

function getAll(req, res, next) {
  prodObj.read()
    .then(list => res.send(list))
    .catch(err => next())
}

function getOne(req, res, next) {
  prodObj.read(req.params.id)
    .then(list => res.send(list))
    .catch(err => next())
}

function add(req, res, next) {
  prodObj.create(req.body)
    .then(stuff => res.send(stuff))
    .catch(err => next())
}

function edit(req, res, next) {
  prodObj.update(req.params.id, req.body)
    .then(stuff => res.send(`${req.params.id} was updated`))
    .catch(err => next())
}

function deleteOne(req, res, next) {
  prodObj.delete(req.params.id)
    .then(stuff => res.send(`${req.params.id} was deleted`))
    .catch(err => next())
}

module.exports = router;