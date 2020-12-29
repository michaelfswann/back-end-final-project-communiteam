var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

const checkJwt = require('./middleware/check-jwt')

//var indexRouter = require('./routes/index');
var eventsRouter = require('./routes/events')
var ticketsRouter = require('./routes/tickets')
var accountsRouter = require('./routes/accounts')
var organiserRouter = require('./routes/organiser')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(checkJwt)
//app.use('/', indexRouter);
app.use('/org', checkJwt, organiserRouter)
app.use('/events', eventsRouter)

app.use('/tickets', ticketsRouter)
app.use('/accounts', accountsRouter)

module.exports = app
