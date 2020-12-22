const { query } = require('../config/index.js')

async function getAllEvents() {
    const result = await query('SELECT * FROM event_table')
    return result.rows
}
module.exports = { getAllEvents }
