import dotenv from 'dotenv';
import express from 'express';
import homeRoutes from './src/context/home/homeRoutes';
import studentRoutes from './src/context/student/studentRoutes';
import userRoutes from './src/context/user/userRoutes';
import './src/database';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/students/', studentRoutes);
    this.app.use('/users/', userRoutes);
  }
}

export default new App().app;
