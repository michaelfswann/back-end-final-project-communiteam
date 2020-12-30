const { query } = require('../../../config/index')

const sqlStatement =
    'INSERT INTO accounts_table (uid, email, is_volunteer) VALUES ($1, $2, $3) RETURNING uid;'

async function addAccount(account) {
    const res = await query(sqlStatement, [
        account.uid,
        account.email,
        account.is_volunteer
    ])
    console.log(`added new account: ${res.rows[0].uid}`)
    return res.rows[0]
}

const accountData = {
    uid: 'ana',
    email: 'ana@gmail.com',
    is_volunteer: 'false'
}

addAccount(accountData)
