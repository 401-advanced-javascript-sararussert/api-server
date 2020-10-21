'use strict';

function error500(req, res, next) {
  res.status(500).send('500 error');
}

module.exports = error500;