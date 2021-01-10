const { query } = require('../../index')

const sqlStatement = `INSERT INTO tickets_table (event_id, attendee_email) VALUES ($1, $2)`

async function bookTicket(info) {
    const result = await query(sqlStatement, [
        info.event_id,
        info.attendee_email
    ])
    console.log(`a new ticket reserved`)
    return result.rows
}

const ticketsData = [
    {
        event_id: 1,
        attendee_email: 'mikeswann@mail.com'
    },
    {
        event_id: 2,
        attendee_email: 'fadumo.ahmed.aideed@gmail.com'
    },
    {
        event_id: 3,
        attendee_email: 'vmilitaru28@gmail.com'
    },
    {
        event_id: 4,
        attendee_email: 'ameliacollinspatel@gmail.com'
    },
    {
        event_id: 5,
        attendee_email: 'tomnbennett2013@gmail.com'
    },
    {
        event_id: 6,
        attendee_email: 'soc.communiteam@gmail.com'
    },
    {
        event_id: 7,
        attendee_email: 'soc.communiteam@gmail.com'
    },
    {
        event_id: 8,
        attendee_email: 'soc.communiteam@gmail.com'
    }
]

ticketsData.map(bookTicket)
