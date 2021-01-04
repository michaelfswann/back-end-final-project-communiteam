const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const checkPermissions = require('./middleware/check-permissions')
const checkJwt = require('./middleware/check-jwt')

<<<<<<< HEAD
//const indexRouter = require('./routes/index');
const eventsRouter = require('./routes/events')
const ticketsRouter = require('./routes/tickets')
const accountsRouter = require('./routes/accounts')
const organiserRouter = require('./routes/protected')
const roleRouter = require('./routes/role')
=======
//var indexRouter = require('./routes/index');
var eventsRouter = require('./routes/events')
//var ticketsRouter = require('./routes/tickets')
//var accountsRouter = require('./routes/accounts')
//var organiserRouter = require('./routes/protected')
>>>>>>> dev

const app = express()

// Set up a whitelist and check against it:
// var whitelist = ['localhost:3000', 'localhost:5000', 'localhost:5000/cors']
// var corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

// Then pass them to cors:
app.use(cors())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

<<<<<<< HEAD
app.use('/events', eventsRouter)
app.use('/tickets', ticketsRouter)
app.use('/accounts', accountsRouter)
=======
//app.use(checkJwt)
//app.use('/', indexRouter);
app.use('/protected', checkJwt, eventsRouter)
app.use('/events', eventsRouter)

//app.use('/tickets', ticketsRouter)
//app.use('/accounts', accountsRouter)
>>>>>>> dev

app.use(checkJwt)

app.use('/protected', checkJwt, organiserRouter)

app.use(
    '/role',

    checkJwt,
    checkPermissions,
    roleRouter
)

module.exports = app
