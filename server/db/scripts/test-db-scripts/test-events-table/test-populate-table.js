require('custom-env').env('testing')

const { query } = require('../../../test-index')

const sqlStatement =
    'INSERT INTO event_table (title, date, time, speaker, banner, description, numtickets, location) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING title;'

async function addEvent(event) {
    const res = await query(sqlStatement, [
        event.title,
        event.date,
        event.time,
        event.speaker,
        event.banner,
        event.description,
        event.numtickets,
        event.location
    ])
    console.log(`added new event: ${res.rows[0].title}`)
    return res.rows[0]
}

const eventData = {
    title: 'example css lecture',
    date: '2020-12-21',
    time: '19:00:00',
    speaker: 'Big Chris',
    banner: 'https://i.redd.it/havo4cxljnuz.jpg',
    description: 'Big Chris talks CSS one night only',
    numtickets: '40',
    location: 'Zoom'
}

addEvent(eventData)
