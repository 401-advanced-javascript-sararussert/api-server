'use strict';

const express = require('express');
const router = express.Router();
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

module.exports = router;

