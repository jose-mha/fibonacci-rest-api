const express = require('express');
const GeneralService = require('../services/general.service');
const validatorHandler = require('../middleware/validator.handler');
const { getFibonacci } = require('../schemas/general.schema');
const { number } = require('joi');

const router = express.Router();
const service = new GeneralService();

router.get('/', async (req, res, next) => {
  res.json('Ruta principal');
});

router.get('/fibonacci/:number', validatorHandler(getFibonacci, 'params'), async (req, res, next) => {
  try {
    const { number } = req.params;
    const response = await service.getFibonacci(number);

    res.json({ Resultado: response });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
