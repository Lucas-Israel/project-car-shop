import CarDomain from '../Domains/CarDomain';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): CarDomain | null {
    if (car) {
      return new CarDomain(car);
    }
    return null;
  }

  public async createCar(car: ICar) {
    const carODM = new CarODM();

    const result = await carODM.create(car);
    
    return this.createCarDomain(result);
  }
}