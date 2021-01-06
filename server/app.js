const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const checkPermissions = require('./middleware/check-permissions')
const checkJwt = require('./middleware/check-jwt')

const eventsRouter = require('./routes/events')
// tickets route not in use
// const ticketsRouter = require('./routes/tickets')

// accounts route not in use
// const accountsRouter = require('./routes/accounts')
const protectedRouter = require('./routes/prot')
const organiserRouter = require('./routes/org')

const app = express()

app.use(cors())

app.use(logger('dev'))
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/events', eventsRouter)

// tickets route not in use
// app.use('/tickets', ticketsRouter)

// accounts route not in use
// app.use('/accounts', accountsRouter)

app.use(checkJwt)

app.use('/prot', checkJwt, protectedRouter)
app.use('/org', checkJwt, checkPermissions, organiserRouter)

module.exports = app
