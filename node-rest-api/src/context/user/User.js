import bcrypt from 'bcryptjs';
import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
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
      password: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 80],
            msg: 'Your password must be between 6 and 80 characters',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      // eslint-disable-next-line no-param-reassign
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 8);
      }
    });

    this.addHook('beforeUpdate', async (user) => {
      if (user.password) {
        // eslint-disable-next-line no-param-reassign
        user.password = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcrypt.compare(password, this.password);
  }
}
