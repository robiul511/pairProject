'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tutors', [
      {
        name: 'Robi',
        age: '23',
        gender: 'Male',
        subject: 'Fisika',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Delphito',
        age: '23',
        gender: 'Male',
        subject: 'Matematika',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ria',
        age: '24',
        gender: 'Female',
        subject: 'Biologi',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tutors', null, {});
  }
};
