import { expect } from 'chai';
import CarService from '../../../src/Services/car.service';

const invalidMongoIdMsg = 'Invalid Mongo id';

describe('Unit tests for abstractODM', function () {
  it('01 - Testing exception for using an invalid mongodb id on findById', async function () {
    try {
      const service = new CarService();
      await service.findById('aaabbbccc');
    } catch (error) {
      expect((error as Error).message).to.be.equal(invalidMongoIdMsg);
    }
  });

  it('02 - Testing exception for using an invalid mongodb id on update', async function () {
    const carBodyToSend = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    try {
      const service = new CarService();
      await service.update('aaabbbccc', carBodyToSend);
    } catch (error) {
      expect((error as Error).message).to.be.equal(invalidMongoIdMsg);
    }
  });

  it('03 - Testing exception for using an invalid mongodb id on deleteById', async function () {
    try {
      await new CarService().deleteById('aaabbbbccc');
    } catch (error) {
      expect((error as Error).message).to.be.equal(invalidMongoIdMsg);
    }
  });
});