const { query } = require('../../index')

const sqlStatement =
    'INSERT INTO event_table (title, date, speaker, banner, description, numtickets, location) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING title;'

async function addEvent(event) {
    const res = await query(sqlStatement, [
        event.title,
        event.date,
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
    speaker: 'Big Chris',
    banner: 'https://i.redd.it/havo4cxljnuz.jpg',
    description: 'Big Chris talks CSS one night only',
    numtickets: '40',
    location: 'Zoom'
}

addEvent(eventData)
