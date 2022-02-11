const Joi = require('joi');

const number = Joi.number().integer();

const getFibonacci = Joi.object({
  number: number.required(),
});

module.exports = { getFibonacci };
