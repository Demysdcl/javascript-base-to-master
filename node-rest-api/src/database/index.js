import Sequelize, { Model } from 'sequelize';
import databaseConfig from '../config/database';
import Student from '../context/student/Student';
import User from '../context/user/User';
import Photo from '../context/photo/Photo';

const models = [Student, User, Photo];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
