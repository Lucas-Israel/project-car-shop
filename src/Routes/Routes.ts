// src/Routes/Routes.ts

import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).findById(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).findAll(),
);

export default routes;