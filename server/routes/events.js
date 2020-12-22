var express = require('express')
var router = express.Router()

const { getAllEvents, getEventById, addEvent } = require('../models/index')

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
    const response = await addEvent(data)
    res.json({ success: true, payload: response })
})

module.exports = router
