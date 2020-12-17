'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tutors', [
      {
        name: 'robi',
        age: '23',
        gender: 'male',
        subject: 'fisika',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'delphito',
        age: '23',
        gender: 'male',
        subject: 'matematika',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ria',
        age: '24',
        gender: 'female',
        subject: 'biologi',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tutors', null, {});
  }
};
