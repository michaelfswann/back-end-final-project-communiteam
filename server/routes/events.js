var express = require('express')
var router = express.Router()

const {
    getAllEvents,
    getEventById,
    getAllEventsAfterCurrentDate
} = require('../models/events')

const {
    countAllTicketsAtEventId,
    getAllTicketsByEventId
} = require('../models/tickets')

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
    const numberOfTickets = await countAllTicketsAtEventId(id)
    const event = await getEventById(id)
    event.date = convertDateFormat(event.date)
    res.json({
        success: true,
        payload: { event: event, numTickets: numberOfTickets }
    })
})

/* -----------------------------------------------------------------------------------------------------------------------------------------------------
    Tickets Routes
----------------------------------------------------------------------------------------------------------------------------------------------------- */

//returning the total number of tickets for the event with a given id
router.get('/:id/tickets', async function (req, res, next) {
    const id = req.params.id
    const ticketCount = await countAllTicketsAtEventId(id)
    // const tickets = await getAllTicketsByEventId(id)
    res.json({
        success: true,
        payload: ticketCount
    })
})

module.exports = router
