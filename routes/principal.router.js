const express = require('express');
const GeneralService = require('../services/general.service');

const router = express.Router();
const service = new GeneralService();

router.get('/', async (req, res, next) => {
  res.json('Ruta principal');
});

module.exports = router;
