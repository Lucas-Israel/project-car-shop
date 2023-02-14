import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';
import VehicleFactoryTypes from '../types/FactoryVehiclesTypes';
import Car from './Car';
import Motorcyle from './Motorcycle';

export default class VehicleFactory {
  public static create(obj: VehicleFactoryTypes) {
    if ('doorsQty' in obj) return new Car(obj as ICar);
    if ('engineCapacity' in obj) return new Motorcyle(obj as IMotorcycle);
    throw new Error('Invalid vehicle');
  }
}