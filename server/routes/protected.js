var express = require('express')
var router = express.Router()

const {
    getAllEvents,
    addEvent,
    updateEventById,
    getEventById
} = require('../models/events')

router.get('/', async function (req, res, next) {
    const events = await getAllEvents()
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

module.exports = router
