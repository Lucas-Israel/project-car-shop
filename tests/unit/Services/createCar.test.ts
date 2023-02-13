import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

describe('Testando camada service da rota cars', function () {
  it('Cria um carro com sucesso', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carOutput: Car = new Car(
      '6348513f34c397abcad040b2',
      'Marea',
      2002,
      'Black',
      true,
      15.990,
      4,
      5,
    );

    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();

    const result = await service.createCar(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });
});