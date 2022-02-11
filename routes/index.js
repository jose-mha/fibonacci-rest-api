const express = require('express');

const principalRouter = require('./principal.router');

function routerAPI(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/', principalRouter);
}

module.exports = routerAPI;
