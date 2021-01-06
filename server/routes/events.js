var express = require('express')
var router = express.Router()

const {
    getAllEvents,
    getEventById,
    getAllEventsAfterCurrentDate
} = require('../models/events')

const { countAllTicketsAtEventId } = require('../models/tickets')

const { convertDateFormat } = require('../models/edit-date.js')

router.get('/', async function (req, res, next) {
    const events = await getAllEvents()
    events.forEach((e) => (e.date = convertDateFormat(e.date)))
    console.log(events)
    res.json({
        success: true,
        payload: events
    })
})
router.get('/date', async function (req, res, next) {
    const events = await getAllEventsAfterCurrentDate()
    events.forEach((e) => (e.date = convertDateFormat(e.date)))
    res.json({ success: true, payload: events })
})

router.get('/:id', async function (req, res, next) {
    const id = req.params.id
    const event = await getEventById(id)
    event.date = convertDateFormat(event.date)
    res.json({ success: true, payload: event })
})

/*
ADDED TO org.js - NEEDS PERMISSIONS FOR CREATING, UPDATING AND DELETING EVENTS

router.post('/', async function (req, res, next) {
    const data = req.body
    const result = await addEvent(data)
    res.json({ success: true, payload: result })
})

router.patch('/:id', async function (req, res) {
    const id = req.params.id
    const details = req.body
    const result = await updateEventById(id, details)
    console.log(result)
    res.json({
        success: true,
        payload: `Event with id ${result.id} has been updated.`
    })
})

router.delete('/:id', async function (req, res) {
    const eventId = req.params.id
    const eventTickets = await countAllTicketsAtEventId(eventId)
    console.log(eventTickets)
    if (eventTickets.count > 0) {
        await deleteTicketByEventId(eventId)
    }
    const { id } = await deleteEventById(eventId)
    res.json({
        success: true,
        payload: `Event with id of ${id} has been deleted.`
    })
})
*/

/* -----------------------------------------------------------------------------------------------------------------------------------------------------
    Tickets Routes
----------------------------------------------------------------------------------------------------------------------------------------------------- */

//returning the total number of tickets for the event with a given id
router.get('/:id/tickets', async function (req, res, next) {
    const id = req.params.id
    const eventTickets = await countAllTicketsAtEventId(id)
    res.json({ success: true, payload: eventTickets })
})

/*
ADDED TO protected.js - NEED SIGN-IN FOR EVENT REGISTRATION

router.post('/:id/tickets', async function (req, res, next) {
    const { attendeeEmail } = req.body
    const eventId = req.params.id
    const result = await bookTicket(attendeeEmail, eventId)
    res.json({ success: true, payload: result })
})
*/

/*
ADDED TO org.js - NEED PERMISSIONS FOR DELETING TICKETS

router.delete('/:id/tickets', async function (req, res) {
    const eventId = req.params.id
    await deleteTicketsByEventId(eventId)
    res.json({
        success: true
    })
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
*/

module.exports = router
