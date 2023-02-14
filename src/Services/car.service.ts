import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import VehicleFactory from '../Domains/VehicleFactory';

export default class CarService {
  public async createVehicle(vehicle: ICar) {
    const result = await new CarODM().create(vehicle as ICar);

    return VehicleFactory.create(result);
  }

  public async findAll() {
    const result = await new CarODM().findAll();

    return result.map((car) => VehicleFactory.create(car));
  }

  public async findById(id: string) {
    const result = await new CarODM().findById(id);

    if (!result) return result;

    return VehicleFactory.create(result);
  }

  public async update(id: string, obj: ICar) {
    const result = await new CarODM().update(id, obj);
    if (!result) return;
    return VehicleFactory.create(result);
  }

  public async deleteById(id: string) {
    const result = await new CarODM().deleteById(id);

    if (!result) return;
    
    return VehicleFactory.create(result);
  }
}