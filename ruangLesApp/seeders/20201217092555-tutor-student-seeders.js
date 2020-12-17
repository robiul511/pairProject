'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TutorStudents', [
      {
        TutorId: 1,
        StudentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        TutorId: 1,
        StudentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        TutorId: 3,
        StudentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        TutorId: 3,
        StudentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        TutorId: 2,
        StudentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TutorStudents', null, {});
  }
};
