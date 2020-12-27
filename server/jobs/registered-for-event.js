var schedule = require('node-schedule')
const { query } = require('../config/index.js')

// var j = schedule.scheduleJob('42 * * * * *', function () {
//     console.log('The answer to life, the universe, and everything!')
// })

// we need to get the date from the database on post req for new ticket

async function getEventById(id) {
    const result = await query('SELECT * FROM event_table WHERE id = $1;', [id])
    return result.rows
}

console.log(getEventById(1))
