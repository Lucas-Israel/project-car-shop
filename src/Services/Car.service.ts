import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import VehicleFactory from '../Domains/VehicleFactory';
import VehicleFactoryTypes from '../types/FactoryVehiclesTypes';
import MotorcycleODM from '../Models/MotorcycleODM';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createCar(vehicle: VehicleFactoryTypes) {
    // const carODM = new CarODM();

    // const result = await carODM.create(vehicle);

    let result;

    if (vehicle as ICar) result = await new CarODM().create(vehicle as ICar);
    if (vehicle as IMotorcycle) {
      result = await new MotorcycleODM().create(vehicle as IMotorcycle);
    }
    
    return VehicleFactory.create(result);
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