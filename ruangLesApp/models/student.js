'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsToMany(models.Tutor, { 
        through: 'TutorStudents' 
      });
    }

  };
  Student.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Student',
    hooks: {
      beforeCreate(instance, options) {
        if (!instance.status) {
          instance.status = false
        }
      }
    }
  });
  return Student;
};