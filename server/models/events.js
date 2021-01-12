const { query } = require('../db/index.js')
const { convertDateFormat } = require('./edit-date')

/* EXAMPLE DATA

    {
        id: '1',
        title: 'Web Accessibility',
        date: '2020-12-21',
        speaker: 'Bruce Lawson',
        banner: 'https://i.redd.it/havo4cxljnuz.jpg',
        description: 'Watch one of HTML5's contributors give a talk on making the web more accessible for those who require other technologies to help them browse.',
        numtickets: '40',
        location: 'Zoom'
    }

*/

async function getAllEvents() {
    const result = await query('SELECT * FROM event_table ORDER BY id ASC')
    return result.rows
}

async function getEventById(id) {
    const result = await query('SELECT * FROM event_table WHERE id = $1;', [id])
    return result.rows[0]
}

async function addEvent(event) {
    const result = await query(
        `INSERT INTO event_table (title, date, time, speaker, banner, description, numtickets, location) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING title;`,
        [
            event.title,
            event.date,
            event.time,
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
        time,
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
        time = COALESCE($4, time),
        speaker = COALESCE($5, speaker),
        banner = COALESCE($6, banner),
        description = COALESCE($7, description),
        numtickets = COALESCE($8, numtickets),
        location = COALESCE($9, location)
        WHERE id = $1 RETURNING id`,
        [
            id,
            title,
            date,
            time,
            speaker,
            banner,
            description,
            numtickets,
            location
        ]
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
        'SELECT * FROM event_table WHERE date >= CURRENT_DATE ORDER BY date ASC'
    )
    const orderedEvents = result.rows.sort((a, b) => {
        if (a.date > b.date) {
            return 0
        }
        if (a.time < b.time) {
            return -1
        }
        return 1
    })

    const i = orderedEvents.findIndex((e) => {
        const dateString = convertDateFormat(e.date)
        const d = new Date(`${dateString}T${e.time}Z`)
        return d > Date.now()
    })

    const upcomingEvents = orderedEvents.slice(i)

    return upcomingEvents
}

getAllEventsAfterCurrentDate()

module.exports = {
    getAllEvents,
    getEventById,
    addEvent,
    updateEventById,
    deleteEventById,
    getAllEventsAfterCurrentDate
}
