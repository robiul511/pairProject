const { User } = require('../models/index') 
const bcrypt = require('bcrypt');
const { use } = require('../routers/routes');

class Controller {
  static homepage(req, res) {
    res.render('homepage.ejs')
  }
  static registerForm(req, res) {
    let errorMessage= ''
    if (req.query.error) {
      errorMessage = req.query.error
    }
    res.render('register.ejs', { errorMessage })
  }
  static registerPost(req, res) {
    const {name, password} = req.body
    User.findOne({where : { name }})
      .then(user => {
        if(user) {
          const isValidPassword = bcrypt.compareSync(password, user.password)
          if(isValidPassword) {
            req.session.userId = user.id
            res.redirect('/')
          }
          else {
            res.redirect('/register?error=Invalid!!')
          }
        } 
        else {
          res.redirect('/register?error=Invalid!!')
        }
      })
      .catch (err => {
        res.send(err.message)
      })
  }
  
}

module.exports = Controller