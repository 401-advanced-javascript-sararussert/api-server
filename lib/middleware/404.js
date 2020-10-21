'use strict';

function error404(req, res, next) {
  res.status(404).send('404 error');
}

module.exports = error404;