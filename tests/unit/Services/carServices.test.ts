import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import VehicleService from '../../../src/Services/Vehicle.service';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Unit tests for vehicle.service', function () {
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

    const service = new VehicleService();
    
    const result = await service.createVehicle(carToSend);

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

    const service = new VehicleService();

    const result = await service.findAll('/cars');

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

    const service = new VehicleService();

    const result = await service.findById(carResolution.id, '/cars/63ebe7a9646e78d29334375f');

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

    const service = new VehicleService();

    const result = await service.update(carResolution.id, carBodyToSend);

    expect(result).to.be.deep.equal(carResolution);
  });

  it('05 - Creates a new motorcycle with the method createVehicle', async function () {
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

    const service = new VehicleService();
    
    const result = await service.createVehicle(motorcycleToSend);

    expect(result).to.be.deep.equal(motorcycleResolution);

    sinon.restore();
  });

  it('06 - Lists all cars with the method findAll', async function () {
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

    const service = new VehicleService();

    const result = await service.findAll('/cars');

    expect(result).to.be.deep.equal(motorcycleResolution);
  });

  it('07 - Lists one car with the method findById', async function () {
    const motorcycleResolution = {
      id: '63ebe9e6646e78d29334376',
      model: 'Honda Cb 600f Horneta',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findById').resolves(motorcycleResolution);

    const service = new VehicleService();

    const result = await service
      .findById(motorcycleResolution.id, '/cars/63ebe7a9646e78d29334375f');

    expect(result).to.be.deep.equal(motorcycleResolution);
  });

  it('08 - Updates one car with the method updateVehicle', async function () {
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
      id: '63ebe9e6646e78d29334376',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleResolution);

    const service = new VehicleService();

    const result = await service.update(motorcycleResolution.id, vehicleToSend);

    expect(result).to.be.deep.equal(motorcycleResolution);
  });
});