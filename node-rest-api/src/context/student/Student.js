import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      firstname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'the firstname must be between 2 and 255 characters',
          },
        },
      },
      lastname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'the firstname must be between 2 and 255 characters',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Invalid e-mail',
          },
        },
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'The age must be a integer number',
          },
        },
      },
      weight: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'The weight must be a integer or float number',
          },
        },
      },
      height: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'The weight must be a integer or float number',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: 'student_id' });
  }
}
