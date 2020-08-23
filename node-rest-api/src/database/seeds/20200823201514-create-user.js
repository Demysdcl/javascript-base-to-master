const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Demys Cota',
          email: 'demysdcl@gmail.com',
          password: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        }, {
          name: 'Laiza Lobo',
          email: 'laiza@lobo.com',
          password: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        }, {
          name: 'John Doe',
          email: 'jonh@doe.com',
          password: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {},
    );
  },

  down: async () => {

  },
};
