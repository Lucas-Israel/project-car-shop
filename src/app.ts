import express from 'express';
import carRoutes from './Routes/car.routes';
import motorcycleRoutes from './Routes/motorcycle.routes';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(motorcycleRoutes);
app.use(ErrorHandler.handle);

export default app;
