import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import VehicleFactory from '../Domains/VehicleFactory';
import VehicleFactoryTypes from '../types/FactoryVehiclesTypes';
import MotorcycleODM from '../Models/MotorcycleODM';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class VehicleService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createVehicle(vehicle: VehicleFactoryTypes) {
    if ('engineCapacity' in vehicle) {
      const result = await new MotorcycleODM().create(vehicle as IMotorcycle);

      return VehicleFactory.create(result);
    }

    const result = await new CarODM().create(vehicle as ICar);

    return VehicleFactory.create(result);
  }

  public async findAll(path: string) {
    if (path === '/motorcycles') {
      const result = await new MotorcycleODM().findAll();
      return result.map((moto) => VehicleFactory.create(moto));
    }

    const result = await new CarODM().findAll();

    return result.map((car) => VehicleFactory.create(car));
  }

  public async findById(id: string, path: string) {
    if (path === 'Motorcycle') {
      const result = await new MotorcycleODM().findById(id);
      if (!result) return result;
      return VehicleFactory.create(result);
    }

    const result = await new CarODM().findById(id);

    if (!result) return result;

    return VehicleFactory.create(result);
  }

  public async update(id: string, obj: VehicleFactoryTypes) {
    if ('engineCapacity' in obj) {
      const result = await new MotorcycleODM().update(id, obj);
      if (!result) return; 
      return VehicleFactory.create(result);
    }
    const result = await new CarODM().update(id, obj);

    return this.createCarDomain(result);
  }
}