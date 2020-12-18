const { Tutor, Student, TutorStudent } = require('../models/index')

class ControllerStudent {
  
  static showAll(req, res) {
    Student.findAll({
      include:Tutor,
      order: [['id', 'ASC']]
    })
    .then((data) => {
      // res.send(data)
      res.render('showStudents', {data})
    })
    .catch((err) => {
      res.send(err)
    })
  }

  static add(req, res) {
    Tutor.findAll()
    .then((data) => {
      res.render('addStudentForm', {data})
    })
    .catch((err) => {
      res.send(err)
    })
  }

  static addPost(req, res) {
    let TutorId = req.body.tutorId
    let StudentId = 0
    let studentObj = {
      name: req.body.name,
      age: Number(req.body.age),
      gender: req.body.gender
    }
    Student.create(studentObj)
    .then(() => {
      return Student.findOne({
        order: [ [ 'createdAt', 'DESC' ]],
      })
    })
    .then((data) => {
      StudentId = data.id
      let tutorStudentObj = {
        TutorId: Number(TutorId),
        StudentId: Number(StudentId)
      }
      console.log('tutorStudentObj', tutorStudentObj);
      return TutorStudent.create(tutorStudentObj)
    })
    .then(() => {
      res.redirect('/students')
    })
    .catch((err) => {
      res.send(err)
    })
  }

  static editById(req, res) {
    let id = req.params.id
    Student.findOne({where: {id:id}})
    .then((data) => {
      data = [data]
      res.render('editStudents', {data})
    })
    .catch((err) => {
      res.send(err)
    })
  }

  static editByIdPost(req, res) {
    let id = req.params.id
    let obj = {
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender
    }
    Student.update(obj, {where: {id:id}})
    .then(() => {
      res.redirect('/students')
    })
    .catch((err) => {
      res.send(err)
    })
  }

  static deleteById(req, res) {
    let id = +req.params.id
    Student.destroy({where:{id:id}})
    .then(() => {
      res.redirect('/students')
    })
    .catch((err) => {
      res.send(err)
    })
  }

  static addTutor(req, res) {
    let id = +req.params.id
    let dataTutor
    Tutor.findAll()
    .then((data) => {
      dataTutor = data
      return Student.findByPk(id)
    })
    .then((dataStudent) => {
      res.render('addTutorOnly', {data:dataTutor, dataStudent})
    })
    .catch((err) => {
      res.send(err)
    })
  }

  static addTutorPost(req, res) {
    let StudentId = req.params.id
    let TutorId = req.body.tutorId

    let tutorStudentObj = {
      TutorId: Number(TutorId),
      StudentId: Number(StudentId)
    }
    
    TutorStudent.create(tutorStudentObj)
    .then(() => {
      res.redirect('/students')
    })
    .catch((err) => {
      res.send(err)
    })
  }

}

module.exports = ControllerStudent