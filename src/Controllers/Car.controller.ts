import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
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

  public async findAll() {
    try {
      const carList = await this.service.findAll();
      return this.res.status(200).json(carList);
    } catch (error) {
      return this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;
    try {
      if (!isValidObjectId(id)) this.res.status(422).json({ message: 'Invalid mongo id' });
      const carByID = await this.service.findById(id);
      if (!carByID) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(200).json(carByID);
    } catch (error) {
      return this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    try {
      if (!isValidObjectId(id)) this.res.status(422).json({ message: 'Invalid mongo id' });
      const vehicleUpdate = await this.service.update(id);
      if (!vehicleUpdate) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(200).json(vehicleUpdate);
    } catch (error) {
      return this.next(error);
    }
  }
}