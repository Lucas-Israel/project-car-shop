import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createCar(car: ICar) {
    const carODM = new CarODM();

    const result = await carODM.create(car);
    
    return this.createCarDomain(result);
  }

  public async findAll() {
    const carODM = new CarODM();

    const result = await carODM.findAll();

    return this.createCarDomain(result);
  }
}