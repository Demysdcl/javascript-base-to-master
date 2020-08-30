import dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';
import homeRoutes from './context/home/homeRoutes';
import studentRoutes from './context/student/studentRoutes';
import userRoutes from './context/user/userRoutes';
import tokenRoutes from './context/token/tokenRoutes';
import photoRoutes from './context/photo/photoRoutes';

import './database';

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
    this.app.use(express.static(resolve(__dirname, 'uploads')));
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
