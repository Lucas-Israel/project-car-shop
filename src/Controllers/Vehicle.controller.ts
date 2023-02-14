import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import VehicleService from '../Services/Vehicle.service';
import VehicleFactoryTypes from '../types/FactoryVehiclesTypes';

export default class VehicleController {
  constructor(
    private req: Request,
    private res: Response,
    private next: NextFunction,
    private service: VehicleService = new VehicleService(),
  ) {}

  public async create() {
    try {
      const newVehicle = await this.service.createVehicle(this.req.body as VehicleFactoryTypes);
      return this.res.status(201).json(newVehicle);
    } catch (error) {
      return this.next(error);
    }
  }

  public async findAll() {
    try {
      const carList = await this.service.findAll(this.req.path);
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
      const vehicleUpdate = await this.service.update(id, this.req.body as ICar);
      if (!vehicleUpdate) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(200).json(vehicleUpdate);
    } catch (error) {
      return this.next(error);
    }
  }
}