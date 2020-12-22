const { query } = require('../config/index.js')

async function getAllEvents() {
    const result = await query('SELECT * FROM event_table')
    return result.rows
}

async function getEventById(id) {
    const result = await query('SELECT * FROM event_table WHERE id = $1;', [id])
    return result.rows
}

async function addEvent(event) {
    const res = await query(
        `INSERT INTO event_table (title, date, speaker, banner, description, numtickets, location) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING title;`,
        [
            event.title,
            event.date,
            event.speaker,
            event.banner,
            event.description,
            event.numtickets,
            event.location
        ]
    )
    console.log(`added new event: ${res.rows[0].title}`)
    return res.rows
}

module.exports = { getAllEvents, getEventById, addEvent }
