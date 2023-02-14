import { expect } from 'chai';
// import sinon from 'sinon';
// import { Model } from 'mongoose';
// import ICar from '../../../src/Interfaces/ICar';
// import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/car.service';

describe('Unit tests for abstractODM', function () {
  // afterEach(function () {
  //   sinon.restore();
  // });

  it('01 - Testing exception for using an invalid mongodb id on findById', async function () {
    try {
      const service = new CarService();
      await service.findById('aaabbbccc');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid Mongo id');
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
      expect((error as Error).message).to.be.equal('Invalid Mongo id');
    }
  });
});