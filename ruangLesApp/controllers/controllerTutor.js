const { Tutor, Student } = require('../models/index')

class ControllerTutor {
  
  static showAll(req, res) {
    Tutor.findAll({
      include: [Student]
    })
    .then((data) => {
      res.render('showTutors', {data})
    })
    .catch((err) => {
      res.send(err)
    })
  }

  static showTutorStudent(req, res) {
    let id = req.params.id //tutor id
    Tutor.findByPk(id, {
      include: [Student]
    })
    .then((data) => {
      // res.send(data.Students)
      res.render('showTutorsStudents', {data})
    })
    .catch((err) => {
      res.send(err)
    })
  }



}

module.exports = ControllerTutor