import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/motorcycle.service';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Unit tests for motorcycle.service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('01 - Creates a new motorcycle with the method createVehicle', async function () {
    const motorcycleToSend: IMotorcycle = {
      model: 'Honda Cb 600f Horn',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const motorcycleResolution: Motorcycle = new Motorcycle({
      id: '63ebe9e6646e78d29334376',
      model: 'Honda Cb 600f Horn',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    });

    sinon.stub(Model, 'create').resolves(motorcycleResolution);

    const service = new MotorcycleService();
    
    const result = await service.createVehicle(motorcycleToSend);

    expect(result).to.be.deep.equal(motorcycleResolution);

    sinon.restore();
  });

  it('02 - Lists all motorCycles with the method findAll', async function () {
    const motorcycleResolution = [{
      id: '63ebe9e6646e78d29334376',
      model: 'Honda Cb 600f Hornets',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    },
    {
      id: '63ebe9e6646e78d29334376',
      model: 'Honda Cb 600f Hornets',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    }];

    sinon.stub(Model, 'find').resolves(motorcycleResolution);

    const service = new MotorcycleService();

    const result = await service.findAll();

    expect(result).to.be.deep.equal(motorcycleResolution);
  });

  it('03 - Lists one motorcyle with the method findById', async function () {
    const motorcycleResolution = {
      id: '63ebec25c350ae88b51a0d07',
      model: 'Honda Cb 600f Hornetas',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findById').resolves(motorcycleResolution);

    const service = new MotorcycleService();

    const result = await service
      .findById(motorcycleResolution.id);

    expect(result).to.be.deep.equal(motorcycleResolution);
  });

  it('04 - Updates one motorcycle with the method updateVehicle', async function () {
    const vehicleToSend = {
      model: 'Honda Cb 600f Hornetx',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const motorcycleResolution = {
      id: '63ebec25c350ae88b51a0d07',
      model: 'Honda Cb 600f Hornetx',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleResolution);

    const service = new MotorcycleService();

    const result = await service.update(motorcycleResolution.id, vehicleToSend);

    expect(result).to.be.deep.equal(motorcycleResolution);
  });

  it('05 - Does not find a motorcycle with method findById', async function () {
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

    const service = new MotorcycleService();

    const result = await service
      .findById(motorcycleResolution.id);

    expect(result).to.be.deep.equal(undefined);
  });

  it('06 - Does not find a motorcycle with method update', async function () {
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

    const service = new MotorcycleService();

    const result = await service.update(motorcycleResolution.id, vehicleToSend);

    expect(result).to.be.deep.equal(undefined);
  });

  it('07 - Deletes a motorcycle based on its ID with method deleteById', async function () {
    const toResolve = {
      id: '63ec0a91b9fa94a03908cdfd',
      model: 'Honda Cb 600f Hornetg',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };
    
    sinon.stub(Model, 'findOneAndDelete').resolves(toResolve);

    const service = new MotorcycleService();

    const result = await service.deleteById('63ec0a91b9fa94a03908cdfd');

    expect(result).to.be.deep.equal(toResolve);
  });

  it('08 - Does not find a motorcycle based on its ID with method deleteById', async function () {
    sinon.stub(Model, 'findOneAndDelete').resolves();

    const service = new MotorcycleService();

    const result = await service.deleteById('63ec0a91b9fa94a03908cdfd');

    expect(result).to.be.deep.equal(undefined);
  });
});