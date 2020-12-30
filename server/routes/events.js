var express = require('express')
var router = express.Router()

const {
    getAllEvents,
    getEventById,
    addEvent,
    updateEventById,
    deleteEventById,
    getAllEventsAfterCurrentDate
} = require('../models/index')

 const {
    //getAllTickets,
    bookTicket,
    //deleteTicketById,
    countAllTicketsAtEventId,
    deleteTicketByEventId,
    deleteTicketByAttendeeEmail,
   // getTicketHolderEmail
} = require('../models/tickets') 

router.get('/', async function (req, res, next) {
    const events = await getAllEvents()
    res.json({ success: true, payload: events })
})
router.get('/date', async function (req, res, next) {
    const events = await getAllEventsAfterCurrentDate()
    res.json({ success: true, payload: events })
})

router.get('/:id', async function (req, res, next) {
    const id = req.params.id
    const event = await getEventById(id)
    res.json({ success: true, payload: event })
})

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
    console.log(eventTickets);
    if (eventTickets.count>0){
        await deleteTicketByEventId(eventId)
    }    
    const { id } = await deleteEventById(eventId)
    res.json({
        success: true,
        payload: `Event with id of ${id} has been deleted.`
    })
})



/* -----------------------------------------------------------------------------------------------------------------------------------------------------
    Tickets Routes
----------------------------------------------------------------------------------------------------------------------------------------------------- */


 /* router.get('/events/', async function (req, res, next) {
    const tickets = await getAllTickets()
    res.json({ success: true, payload: tickets })
}) 

 router.get('/emails/:eventid', async function (req, res, next) {
    const eventid = req.params.eventid
    const eventTickets = await getTicketHolderEmail(eventid)
    res.json({ success: true, payload: eventTickets })
}) 

router.delete('/ticket/:id', async function (req, res) {
    const ticketId = req.params.id
    const { id } = await deleteTicketById(ticketId)
    res.json({
        success: true,
        payload: `Ticket with id  ${id} has been deleted.`
    })
})

router.delete('/:id', async function (req, res) {
    const byEventId = req.params.id
    const eventId = await deleteTicketByEventId(byEventId)
    res.json({
        success: true,
        payload: `All tickets for the event with id ${eventId} have been deleted.`
    })
}) */



//returning the total number of tickets for the event with a given id 
router.get('/:id/tickets', async function (req, res, next) {
    const id = req.params.id
    const eventTickets = await countAllTicketsAtEventId(id)
    res.json({ success: true, payload: eventTickets })
})


router.post('/:id/tickets', async function (req, res, next) {
    const {attendeeEmail} = req.body
    const eventId= req.params.id
    const result = await bookTicket({attendeeEmail, eventId})
    res.json({ success: true, payload: result })
})


//double check - there might be a different way using query param.
router.delete('/:id/tickets', async function (req, res) {
    const eventId = req.params.id
    const {attendeeEmail} = req.body
    await deleteTicketByAttendeeEmail(attendeeEmail, eventId)
    res.json({
        success: true
    })
})

 


module.exports = router
