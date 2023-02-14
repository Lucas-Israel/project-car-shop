import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/motorcycle.service';

export default class MotorcycleController {
  constructor(
    private req: Request,
    private res: Response,
    private next: NextFunction,
    private service: MotorcycleService = new MotorcycleService(),
  ) {}

  public async create() {
    try {
      const newVehicle = await this.service.createVehicle(this.req.body as IMotorcycle);
      return this.res.status(201).json(newVehicle);
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
      const vehicleById = await this.service.findById(id);
      if (!vehicleById) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(vehicleById);
    } catch (error) {
      return this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    try {
      if (!isValidObjectId(id)) this.res.status(422).json({ message: 'Invalid mongo id' });
      const vehicleUpdate = await this.service.update(id, this.req.body as IMotorcycle);
      if (!vehicleUpdate) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(vehicleUpdate);
    } catch (error) {
      return this.next(error);
    }
  }
}