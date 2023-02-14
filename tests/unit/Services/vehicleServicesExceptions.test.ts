import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import VehicleService from '../../../src/Services/Vehicle.service';

describe('Unit tests for vehicle.service exceptions', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('01 - Does not find a car with method findById', async function () {
    sinon.stub(Model, 'findById').resolves();

    const service = new VehicleService();

    const result = await service
      .findById('63ebe7a9646e78d29334375f', '/cars/63ebe7a9646e78d29334375f');

    expect(result).to.be.deep.equal(null);
  });

  it('02 - Does not find a car with method update', async function () {
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

    const service = new VehicleService();

    const result = await service.update(carResolution.id, carBodyToSend);

    expect(result).to.be.deep.equal(carResolution);
  });

  it('03 - Does not find a motorcycle with method findById', async function () {
    const motorcycleResolution = {
      id: '63ebec25c350ae88b51a0d07',
      model: 'Honda Cb 600f Horneta',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findById').resolves();

    const service = new VehicleService();

    const result = await service
      .findById(motorcycleResolution.id, 'Motorcycle');

    expect(result).to.be.deep.equal(motorcycleResolution);
  });

  it('04 - Does not find a motorcycle with method update', async function () {
    const vehicleToSend = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const motorcycleResolution = {
      id: '63ebec25c350ae88b51a0d07',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    const service = new VehicleService();

    const result = await service.update(motorcycleResolution.id, vehicleToSend);

    expect(result).to.be.deep.equal(motorcycleResolution);
  });
});