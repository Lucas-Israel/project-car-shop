import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/Car.service';

describe('Testando camada service da rota cars', function () {
  it('01 - Cria um carro com sucesso', async function () {
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
});