'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = require('../assets/students.json')
    data.forEach(element => {
      element.createdAt = new Date()
      element.updatedAt = new Date()
    });
    return queryInterface.bulkInsert('Students', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
