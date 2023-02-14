import VehicleFactory from '../Domains/VehicleFactory';
import MotorcycleODM from '../Models/MotorcycleODM';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleService {
  public async createVehicle(vehicle: IMotorcycle) {
    const result = await new MotorcycleODM().create(vehicle as IMotorcycle);

    return VehicleFactory.create(result);
  }

  public async findAll() {
    const result = await new MotorcycleODM().findAll();

    return result.map((motorcycle) => VehicleFactory.create(motorcycle));
  }

  public async findById(id: string) {
    const result = await new MotorcycleODM().findById(id);

    if (!result) return result;

    return VehicleFactory.create(result);
  }

  public async update(id: string, obj: IMotorcycle) {
    const result = await new MotorcycleODM().update(id, obj);
    if (!result) return;
    return VehicleFactory.create(result);
  }

  public async deleteById(id: string) {
    const result = await new MotorcycleODM().deleteById(id);

    if (!result) return;
    
    return VehicleFactory.create(result);
  }
}