import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
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

  private pathToNameForMessage(pathName: string) {
    const removingSlashAndID = pathName.replace(/\/\w+$/, '').replace('/', '');
    const removingLastChar = removingSlashAndID.substring(0, removingSlashAndID.length - 1);
    const result = removingLastChar.charAt(0).toUpperCase() + removingLastChar.slice(1);
    return result;
  }

  public async findById() {
    const { id } = this.req.params;
    const path = this.pathToNameForMessage(this.req.path);
    const notFoundMessage = `${path} not found`;
    try {
      if (!isValidObjectId(id)) this.res.status(422).json({ message: 'Invalid mongo id' });
      const vehicleById = await this.service.findById(id, path);
      if (!vehicleById) return this.res.status(404).json({ message: notFoundMessage });
      return this.res.status(200).json(vehicleById);
    } catch (error) {
      return this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const path = this.pathToNameForMessage(this.req.path);
    const notFoundMessage = `${path} not found`;
    try {
      if (!isValidObjectId(id)) this.res.status(422).json({ message: 'Invalid mongo id' });
      const vehicleUpdate = await this.service.update(id, this.req.body as VehicleFactoryTypes);
      if (!vehicleUpdate) return this.res.status(404).json({ message: notFoundMessage });
      return this.res.status(200).json(vehicleUpdate);
    } catch (error) {
      return this.next(error);
    }
  }
}