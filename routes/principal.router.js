const express = require('express');
const GeneralService = require('../services/general.service');
const validatorHandler = require('../middleware/validator.handler');
const { getFibonacci } = require('../schemas/general.schema');

const router = express.Router();
const service = new GeneralService();

router.get('/', async (req, res, next) => {
  res.json('Ruta principal');
});

router.get('/fibonacci/:number', validatorHandler(getFibonacci, 'params'), async (req, res, next) => {
  try {
    res.json('Aqui va la respuesta fibo');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
