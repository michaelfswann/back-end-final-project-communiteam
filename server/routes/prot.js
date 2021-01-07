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
    getTicketsByAttendeeEmail
} = require('../models/tickets')

// router.get('/', async function (req, res, next) {
//     const events = await getAllEvents()
//     res.json({ success: true, payload: events })
// })

// router.get('/:id', async function (req, res, next) {
//     const id = req.params.id
//     const event = await getEventById(id)
//     res.json({ success: true, payload: event })
// })

// router.post('/', async function (req, res, next) {
//     const data = req.body
//     const result = await addEvent(data)
//     res.json({ success: true, payload: result })
// })

// router.patch('/:id', async function (req, res) {
//     const id = req.params.id
//     const details = req.body
//     const result = await updateEventById(id, details)
//     console.log(result)
//     res.json({
//         success: true,
//         payload: `Event with id ${result.id} has been updated.`
//     })
// })

router.get('/', async function (req, res, next) {
    res.json({
        message: 'Route protection active'
    })
})

/* TICKETS ROUTES */

router.get('/tickets', async function (req, res) {
    const tickets = await getAllTickets()
    res.json({ success: true, payload: tickets })
})

router.get('/tickets/email', async function (req, res) {
    const { attendeeEmail } = req.body
    const tickets = await getTicketsByAttendeeEmail(attendeeEmail)
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
