'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 5;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Robi',
        password: bcrypt.hashSync('adminRobi', saltRounds),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Delphito',
        password: bcrypt.hashSync('adminDelphito', saltRounds),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ria',
        password: bcrypt.hashSync('adminDelphito', saltRounds),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
