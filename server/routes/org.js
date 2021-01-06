var express = require('express')
var router = express.Router()
const cloudinary = require('cloudinary').v2

const {
    addEvent,
    updateEventById,
    deleteEventById
} = require('../models/events.js')

const {
    countAllTicketsAtEventId,
    deleteTicketsByEventId
} = require('../models/tickets.js')

const getRoleMessage = () => {
    return {
        message:
            'The API successfully validated your access token and permissions.'
    }
}

router.get('/', async function (req, res, next) {
    const message = getRoleMessage()
    res.json({ success: true, payload: message })
})

/* EVENT ROUTES */

/* router.post('/', function (req, res, next) {
        const data = req.body
        const result = await addEvent(data)
        res.json({ success: true, payload: result }) 

}) */

/*-------------------------------------------------------Cloudinary config ----------------------*/

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

router.post('/', async function (req, res, next) {
        const fileStr = req.body.banner
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'event_setups'
        })
        console.log(uploadedResponse.url)
       

    /* const data = req.body
    const result = await addEvent(data)
    res.json({ success: true, payload: result })  */
})

/* try { res.json({ msg: 'Victory' })
} catch (error) {
    console.log(error)
    res.status(500).json({ err: 'Something went wrong' })
} */
/*--------------------------------------------------------------------------------------------------------------------*/

router.patch('/:id', async function (req, res) {
    const id = req.params.id
    const details = req.body
    const result = await updateEventById(id, details)
    res.json({
        success: true,
        payload: `Event with id ${result.id} has been updated.`
    })
})

router.delete('/:id', async function (req, res) {
    const eventId = req.params.id
    const eventTickets = await countAllTicketsAtEventId(eventId)
    if (eventTickets.count > 0) {
        await deleteTicketsByEventId(eventId)
    }

    const { id } = await deleteEventById(eventId)
    res.json({
        success: true,
        payload: `Event with id of ${id} has been deleted.`
    })
})

/* TICKETS ROUTES */

router.delete('/:id/tickets', async function (req, res) {
    const eventId = req.params.id
    await deleteTicketsByEventId(eventId)
    res.json({
        success: true
    })
})

module.exports = router
