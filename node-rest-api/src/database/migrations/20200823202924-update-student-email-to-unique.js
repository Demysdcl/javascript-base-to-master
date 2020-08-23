module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'students',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
    );
  },

  down: async () => { },
};
