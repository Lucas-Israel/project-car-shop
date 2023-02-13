import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/Car.service';

describe('Unit tests for car.service', function () {
  it('01 - Creates a new car with the method createCar', async function () {
    const carToSend: ICar = {
      model: 'Mareass',
      year: 2002,
      color: 'Black',
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carResolution: Car = new Car({
      id: '63eaa703ae576a7db2c1631d',
      model: 'AAAA',
      year: 2002,
      color: 'Black',
      status: false,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'create').resolves(carResolution);

    const service = new CarService();
    
    const result = await service.createCar(carToSend);

    expect(result).to.be.deep.equal(carResolution);

    sinon.restore();
  });

  it('02 - Lists all cars with the method findAll', async function () {
    const carResolution = [{
      id: '63eaa703ae576a7db2c1631d',
      model: 'Mareass',
      year: 2002,
      color: 'Black',
      status: false,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    },
    {
      id: '63eaa703ae576a7db2c1631d',
      model: 'Mareass',
      year: 2002,
      color: 'Black',
      status: false,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    }];

    sinon.stub(Model, 'find').resolves(carResolution);

    const service = new CarService();

    const result = await service.findAll();

    expect(result).to.be.deep.equal(carResolution);
  });

  it('03 - Lists one car with the method findById', async function () {
    const carResolution = {
      _id: '63eab0d5433c7012ae17b278',
      model: 'Mareass',
      year: 2002,
      color: 'Black',
      status: false,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
      __v: 0,
    };

    sinon.stub(Model, 'findById').resolves(carResolution);

    const service = new CarService();

    const result = await service.findById(carResolution._id);

    expect(result).to.be.deep.equal(carResolution);
  });
});