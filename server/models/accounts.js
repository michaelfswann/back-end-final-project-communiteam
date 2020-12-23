const { query } = require('../config/index.js')

async function getAllAccounts() {
    const result = await query('SELECT * FROM accounts_table')
    return result.rows
}

async function getAccountByUid(uid) {
    const result = await query('SELECT * FROM accounts_table WHERE uid = $1;', [
        uid
    ])
    return result.rows
}

async function addAccount(account) {
    const res = await query(
        'INSERT INTO accounts_table (uid, email, is_volunteer) VALUES ($1, $2, $3) RETURNING uid;',
        [account.uid, account.email, account.is_volunteer]
    )
    console.log(`added new account: ${res.rows[0].uid}`)
    return res.rows[0]
}

async function updateAccountByUid(uid, details) {
    const { email, is_volunteer } = details
    const result = await query(
        `UPDATE accounts_table
        SET
        email = COALESCE($2, email),
        is_volunteer = COALESCE($3, is_volunteer)
        WHERE uid = $1 RETURNING uid`,
        [uid, email, is_volunteer]
    )
    return result.rows[0]
}

async function deleteAccountByUid(uid) {
    const result = await query(
        `DELETE FROM accounts_table WHERE uid = $1 RETURNING uid`,
        [id]
    )
    console.log(result)
    return result.rows[0]
}

module.exports = {
    getAllAccounts,
    getAccountByUid,
    updateAccountByUid,
    deleteAccountByUid,
    addAccount
}
