const express = require('express')
const session = require('express-session')
const app = express()
const isEnrolled = require('./helper/helper.js')
const router = require('./routers/routes')

const port = 3000

//install express session
app.use(session({
  secret: 'terserah',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

// install ejs
app.set('view engine', 'ejs')

//middle-ware
app.use(express.urlencoded({extended: false}))

//define endpoint
app.use('/', router)

//helpers
app.locals.isEnrolled = isEnrolled

app.listen(port, () => {
  console.log('Listening on', port);
})

