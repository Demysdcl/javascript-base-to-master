import Sequelize, { Model } from 'sequelize';
import appConfig from '../../config/appConfig';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Inform o originalname',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Inform o filename',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
        },
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'students',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },

    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
  }
}
