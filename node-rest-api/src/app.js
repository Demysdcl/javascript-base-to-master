import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import { resolve } from 'path';
import homeRoutes from './context/home/homeRoutes';
import photoRoutes from './context/photo/photoRoutes';
import studentRoutes from './context/student/studentRoutes';
import tokenRoutes from './context/token/tokenRoutes';
import userRoutes from './context/user/userRoutes';
import './database';

dotenv.config();

const whiteList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
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
