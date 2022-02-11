const boom = require('@hapi/boom');

class GeneralService {
  constructor() {}

  async getFibonacci(number = 0) {
    if (!number || number < 0) {
      throw boom.notFound('El nmero debe ser entero positivo');
    }
    const max_number = 1000,
      list_numbers = [0, 1];
    let number_1 = 0,
      number_2 = 1,
      counter = 0,
      aux = 0;

    while (counter < number && counter < max_number) {
      aux = number_1 + number_2;
      number_1 = number_2;
      number_2 = aux;
      list_numbers.push(aux);
      counter++;
    }

    return list_numbers[number];
  }
}

module.exports = GeneralService;
