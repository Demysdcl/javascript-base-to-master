import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Student from '../context/student/Student';
import User from '../context/user/User';

const models = [Student, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
