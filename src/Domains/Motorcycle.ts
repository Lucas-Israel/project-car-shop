import IMotorcycle from '../Interfaces/IMotorcycle';
import VehicleDomain from './Vehicle';

export default class MotorcycleDomain extends VehicleDomain {
  private category: string;
  private engineCapacity: number;
  constructor({ 
    category, 
    engineCapacity,
    id,
    model,
    year,
    color,
    status,
    buyValue,
  }: IMotorcycle) {
    super(
      id,
      model,
      year,
      color,
      status,
      buyValue,
    );
    this.category = category;
    this.engineCapacity = engineCapacity;
  }

  public setCategory(category: string) {
    this.category = category;
  }

  public getCategory() {
    return this.category;
  }

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }
}