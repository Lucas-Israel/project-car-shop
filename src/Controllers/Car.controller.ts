import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/Car.service';

export default class CarController {
  constructor(
    private req: Request,
    private res: Response,
    private next: NextFunction,
    private service: CarService = new CarService(),
  ) {}

  public async create() {
    const { buyValue, color, doorsQty, model, seatsQty, status, year } = this.req.body as ICar;
    const car: ICar = {
      buyValue,
      color,
      doorsQty,
      model,
      seatsQty,
      status,
      year,
    } as ICar;

    try {
      const newCar = await this.service.createCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      return this.next(error);
    }
  }
}