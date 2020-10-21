'use strict';

const express = require('express');
const app = express();
const timestamp = require('./middleware/timestamp.js');
const error404 = require('./middleware/404.js');
const error500 = require('./middleware/500.js');
const logger = require('./middleware/logger.js');

app.use(express.json(), express.urlencoded({extended: true}), timestamp, logger);

app.post('/products', (req, res) => {res.send(req.body);});
app.get('/products', (req, res) => {res.send(req.body)})
app.get('/products/:id', (req, res) => {res.send(req.params)})
app.put('/products/:id', (req, res) => {res.send(req.params)})
app.delete('/products/:id', (req, res) => {res.send(req.params)})
app.post('/categories', (req, res) => {res.send(req.body);})
app.get('/categories', (req, res) => {res.send(req.body);})
app.get('/categories/:id', (req, res) => {res.send(req.params)})
app.put('/categories/:id', (req, res) => {res.send(req.params)})
app.delete('/categories/:id', (req, res) => {res.send(req.params)})
app.use(error404);
app.use(error500);


module.exports = app;

