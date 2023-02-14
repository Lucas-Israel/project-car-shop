// src/Routes/Routes.ts

import { Router } from 'express';
import VehicleController from '../Controllers/Vehicle.controller';

const routes = Router();

routes.post(
  ['/cars', '/motorcycles'],
  (req, res, next) => new VehicleController(req, res, next).create(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new VehicleController(req, res, next).findById(),
);

routes.get(
  ['/cars', '/motorcycles'],
  (req, res, next) => new VehicleController(req, res, next).findAll(),
);

routes.put(
  '/cars/:id',
  (req, res, next) => new VehicleController(req, res, next).update(),
);

export default routes;