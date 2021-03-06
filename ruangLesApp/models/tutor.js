'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tutor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    nameFormatter() {
      let prefix
      this.gender == 'Male' ? prefix = 'Mr.' : prefix = 'Mrs'
      return `${prefix} ${this.name}`
    }
    
    static associate(models) {
      Tutor.belongsToMany(models.Student, { 
        through: 'TutorStudents' 
      })
    }
  };
  Tutor.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    subject: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tutor',
  });
  return Tutor;
};