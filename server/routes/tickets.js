var express = require('express')
var router = express.Router()

const {
    getAllTickets,
    bookTicket,
    deleteTicketById,
    countAllTicketsAtEventId,
    deleteTicketByEventId,
    deleteTicketByAttendeeId,
    getTicketHolderEmail
} = require('../models/tickets')

router.get('/', async function (req, res, next) {
    const tickets = await getAllTickets()
    res.json({ success: true, payload: tickets })
})
router.get('/:id', async function (req, res, next) {
    const id = req.params.id
    const eventTickets = await countAllTicketsAtEventId(id)
    res.json({ success: true, payload: eventTickets })
})

router.get('/emails/:eventid', async function (req, res, next) {
    const eventid = req.params.eventid
    const eventTickets = await getTicketHolderEmail(eventid)
    res.json({ success: true, payload: eventTickets })
})

router.post('/', async function (req, res, next) {
    const data = req.body
    const result = await bookTicket(data)
    res.json({ success: true, payload: result })
})

router.delete('/ticket/:id', async function (req, res) {
    const ticketId = req.params.id
    const { id } = await deleteTicketById(ticketId)
    res.json({
        success: true,
        payload: `Ticket with id  ${id} has been deleted.`
    })
})

router.delete('/event/:id', async function (req, res) {
    const byEventId = req.params.id
    const eventId = await deleteTicketByEventId(byEventId)
    res.json({
        success: true,
        payload: `All tickets for the event with id ${eventId} have been deleted.`
    })
})

router.delete('/attendee/:id', async function (req, res) {
    const attendeeId = req.params.id
    const attendee = await deleteTicketByAttendeeId(attendeeId)
    res.json({
        success: true,
        payload: `All tickets allocated to attendee with  id of ${attendee} have been deleted.`
    })
})

module.exports = router
