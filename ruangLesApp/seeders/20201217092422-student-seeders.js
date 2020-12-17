'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
      {
        name: 'ika',
        age: '19',
        gender: 'female',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'andaru',
        age: '18',
        gender: 'male',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'andira',
        age: '18',
        gender: 'female',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
