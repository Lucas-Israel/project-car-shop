import { Router } from 'express';
import MotorcycleController from '../Controllers/motorcycle.controller';

const routes = Router();

const routeForMotorcyclesId = '/motorcycles/:id';

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

routes.get(
  routeForMotorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).findById(),
);

routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).findAll(),
);

routes.put(
  routeForMotorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);

routes.delete(
  routeForMotorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).deleteById(),
);

export default routes;