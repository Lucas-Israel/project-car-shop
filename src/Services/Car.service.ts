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

    return result.map((car) => this.createCarDomain(car));
  }

  public async findById(id: string) {
    const carODM = new CarODM();

    const result = await carODM.findById(id);

    return this.createCarDomain(result);
  }

  public async update(id: string, obj: ICar) {
    const vehicleODM = new CarODM();

    const result = await vehicleODM.update(id, obj);

    return this.createCarDomain(result);
  }
}