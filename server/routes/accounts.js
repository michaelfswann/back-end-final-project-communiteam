var express = require('express')
var router = express.Router()

const {
    getAllAccounts,
    getAccountByUid,
    addAccount,
    updateAccountByUid,
    deleteAccountByUid
} = require('../models/accounts')

router.get('/', async function (req, res, next) {
    const events = await getAllAccounts()
    res.json({ success: true, payload: events })
})

router.get('/:uid', async function (req, res, next) {
    const uid = req.params.uid
    const event = await getAccountByUid(uid)
    res.json({ success: true, payload: event })
})

router.post('/', async function (req, res, next) {
    const data = req.body
    const result = await addAccount(data)
    res.json({ success: true, payload: result })
})

router.patch('/:uid', async function (req, res) {
    const uid = req.params.uid
    const details = req.body
    const result = await updateAccountByUid(uid, details)
    console.log(result)
    res.json({
        success: true,
        payload: `Account with uid: ${result.uid} has been updated.`
    })
})

router.delete('/:uid', async function (req, res) {
    const accountId = req.params.uid
    const { uid } = await deleteAccountByUid(accountId)
    res.json({
        success: true,
        payload: `Account with uid of ${uid} has been deleted.`
    })
})

module.exports = router
