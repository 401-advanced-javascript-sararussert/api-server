'use strict'

const { response } = require('express');
const express = require('express');
const router = express.Router();
const Categories = require('../lib/models/categories/categories-model.js');
let coolCat = new Categories();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', add);
router.put('/:id', edit);
router.delete('/:id', deleteOne);

function getAll(req, res, next) {
  coolCat.read()
    .then(list => res.send(list))
    .catch(err => next())
}

function getOne(req, res, next) {
  coolCat.read(req.params.id)
    .then(list => res.send(list))
    .catch(err => next())
}

function add(req, res, next) {
  coolCat.create(req.body)
    .then(stuff => res.send(stuff))
    .catch(err => next())
}

function edit(req, res, next) {
  coolCat.update(req.params.id, req.body)
    .then(stuff => res.send(`${req.params.id} was updated`))
    .catch(err => next())
}

function deleteOne(req, res, next) {
  coolCat.delete(req.params.id)
    .then(stuff => res.send(`${req.params.id} was deleted`))
    .catch(err => next())
}

module.exports = router;