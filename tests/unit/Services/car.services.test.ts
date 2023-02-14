import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/car.service';

describe('Unit tests for car.service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('01 - Creates a new car with the method createVehicle', async function () {
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
    
    const result = await service.createVehicle(carToSend);

    expect(result).to.be.deep.equal(carResolution);
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
      id: '63eabd97c13fab94e4583236',
      model: 'Mareass',
      year: 2002,
      color: 'Black',
      status: false,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };

    sinon.stub(Model, 'findById').resolves(carResolution);

    const service = new CarService();

    const result = await service.findById(carResolution.id);

    expect(result).to.be.deep.equal(carResolution);
  });

  it('04 - Updates one car with the method updateVehicle', async function () {
    const carBodyToSend = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    const carResolution = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    sinon.stub(Model, 'findByIdAndUpdate').resolves(carResolution);

    const service = new CarService();

    const result = await service.update(carResolution.id, carBodyToSend);

    expect(result).to.be.deep.equal(carResolution);
  });

  it('05 - Does not find a car with method findById', async function () {
    sinon.stub(Model, 'findById').resolves();

    const service = new CarService();

    const result = await service
      .findById('63ebe7a9646e78d29334375f');

    expect(result).to.be.deep.equal(undefined);
  });

  it('06 - Does not find a car with method update', async function () {
    const carBodyToSend = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    const carResolution = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    const service = new CarService();

    const result = await service.update(carResolution.id, carBodyToSend);

    expect(result).to.be.deep.equal(undefined);
  });
});