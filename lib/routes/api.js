'use strict'

const express = require('express');
const router = express.Router();
const params = require('../middleware/params.js');
const Categories = require('../models/categories/categories-model.js');
const Products = require('../models/products/products-model.js')

function getModel(req, res, next) {
  let model = req.params.model; 

  switch (model) {
    case "category":
      req.model = Categories;
      next();
      return;
    case "product":
      req.model = Products;
      next();
      return;
    default:
      next("Invalid Model");
      return;
  }
}

router.param('model', getModel);


// Route Definitions
router.get('/:model', getAll);
router.get('/:model/:id', getOne);
router.post('/:model', add);
router.put('/:model/:id', edit);
router.delete('/:model/:id', deleteOne);

// Route Handlers

function getAll(req, res, next) {
  req.model.read()
    .then(list => res.send(list))
    .catch(err => next())
}

function getOne(req, res, next) {
  req.model.read(req.params.id)
    .then(list => res.send(list))
    .catch(err => next())
}

function add(req, res, next) {
  req.model.create(req.body)
    .then(stuff => res.send(stuff))
    .catch(err => next())
}

function edit(req, res, next) {
  req.model.update(req.params.id, req.body)
    .then(stuff => res.send(`${req.params.id} was updated`))
    .catch(err => next())
}

function deleteOne(req, res, next) {
  req.model.delete(req.params.id)
    .then(stuff => res.send(`${req.params.id} was deleted`))
    .catch(err => next())
}

module.exports = router;