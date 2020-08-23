import dotenv from 'dotenv';
import express from 'express';
import homeRoutes from './src/context/home/homeRoutes';
import studentRoutes from './src/context/student/studentRoutes';
import userRoutes from './src/context/user/userRoutes';
import tokenRoutes from './src/context/token/tokenRoutes';
import photoRoutes from './src/context/photo/photoRoutes';

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
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/photos/', photoRoutes);
  }
}

export default new App().app;
