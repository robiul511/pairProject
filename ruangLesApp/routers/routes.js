const express = require('express')
const router = express.Router()

const Controller = require('../controllers/controller')
const ControllerTutor = require('../controllers/controllerTutor')
const ControllerStudent = require('../controllers/controllerStudent')

// default
router.get('/', Controller.homepage)
// router.get('/login', Controller.login)
// router.post('/login', Controller.loginPost)

// tutors
router.get('/tutors', ControllerTutor.showAll)
router.get('/tutors/students/:id', ControllerTutor.showTutorStudent)

// students
const checkLogin = (req, res, next) => {
    if (req.session.userId) {
        next()
    }
    else {
        res.redirect('/register')
    }
}
router.get('/students', ControllerStudent.showAll)
router.get('/students/add', checkLogin, ControllerStudent.add)
router.post('/students/add', ControllerStudent.addPost)

router.get('/students/edit/:id', checkLogin, ControllerStudent.editById)
router.post('/students/edit/:id', ControllerStudent.editByIdPost)

router.get('/students/delete/:id', checkLogin, ControllerStudent.deleteById)

router.get('/students/addtutor/:id', checkLogin, ControllerStudent.addTutor)
router.post('/students/addtutor/:id', ControllerStudent.addTutorPost)

// register
router.get('/register', Controller.registerForm)
router.post('/register', Controller.registerPost)


module.exports = router