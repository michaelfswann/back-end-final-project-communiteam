const express = require('express')
const router = express.Router()

const emailAddress = process.env.EMAIL_ADDRESS

const { convertDateFormat } = require('../models/edit-date')

const { newTicketEmail } = require('../models/nodemailer')

const {
    getAllEvents,
    addEvent,
    updateEventById,
    getEventById
} = require('../models/events')

const {
    getAllTickets,
    bookTicket,
    deleteTicketByAttendeeEmail,
    getAllTicketsByAttendeeEmail
} = require('../models/tickets')

router.get('/', async function (req, res, next) {
    res.json({
        message: 'Route protection active'
    })
})

/* TICKETS ROUTES */

router.get('/tickets', async function (req, res) {
    let tickets
    if (req.query.email) {
        tickets = await getAllTicketsByAttendeeEmail(req.query.email)
        tickets.forEach((e) => (e.date = convertDateFormat(e.date)))
    } else {
        tickets = await getAllTickets()
    }
    res.json({ success: true, payload: tickets })
})

router.post('/:id/tickets', async function (req, res, next) {
    const { attendeeEmail } = req.body
    const eventId = req.params.id
    const result = await bookTicket(attendeeEmail, eventId)
    const event = await getEventById(eventId)
    event.date = convertDateFormat(event.date)
    newTicketEmail(attendeeEmail, event)
    res.json({ success: true, payload: result })
})

//double check - there might be a different way using query param.
router.delete('/:id/tickets/unregister', async function (req, res) {
    const eventId = req.params.id
    const { attendeeEmail } = req.body
    await deleteTicketByAttendeeEmail(attendeeEmail, eventId)
    res.json({
        success: true
    })
})

module.exports = router
