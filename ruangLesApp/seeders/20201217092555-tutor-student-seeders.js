'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = require('../assets/associations.json')
    data.forEach(element => {
      element.createdAt = new Date()
      element.updatedAt = new Date()
    });
    return queryInterface.bulkInsert('TutorStudents', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TutorStudents', null, {});
  }
};
