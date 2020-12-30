const { query } = require('../db/index.js')

async function getAllEvents() {
    const result = await query('SELECT * FROM event_table ORDER BY id ASC')
    return result.rows
}

async function getEventById(id) {
    const result = await query('SELECT * FROM event_table WHERE id = $1;', [id])
    return result.rows
}

async function addEvent(event) {
    const result = await query(
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
    console.log(`added new event: ${result.rows[0].title}`)
    return result.rows
}

async function updateEventById(id, details) {
    const {
        title,
        date,
        speaker,
        banner,
        description,
        numtickets,
        location
    } = details
    const result = await query(
        `UPDATE event_table 
        SET 
        title = COALESCE($2, title),
        date = COALESCE($3, date),
        speaker = COALESCE($4, speaker),
        banner = COALESCE($5, banner),
        description = COALESCE($6, description),
        numtickets = COALESCE($7, numtickets),
        location = COALESCE($8, location)
        WHERE id = $1 RETURNING id`,
        [id, title, date, speaker, banner, description, numtickets, location]
    )
    return result.rows[0]
}

async function deleteEventById(id) {
    const result = await query(
        `DELETE FROM event_table WHERE id = $1 RETURNING id`,
        [id]
    )
    console.log(result)
    return result.rows[0]
}

async function getAllEventsAfterCurrentDate() {
    const result = await query(
        'SELECT * FROM event_table WHERE date >= CURRENT_DATE'
    )
    return result.rows
}

module.exports = {
    getAllEvents,
    getEventById,
    addEvent,
    updateEventById,
    deleteEventById,
    getAllEventsAfterCurrentDate
}
