import ICar from '../Interfaces/ICar';
import VehicleDomain from './Vehicle';

export default class CarDomain extends VehicleDomain {
  private doorsQty: number;
  private seatsQty: number;
  constructor({ 
    doorsQty, 
    seatsQty,
    id,
    model,
    year,
    color,
    status,
    buyValue,
  }: ICar) {
    super(
      id,
      model,
      year,
      color,
      status,
      buyValue,
    );
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
}