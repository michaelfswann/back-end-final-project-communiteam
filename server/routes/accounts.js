var express = require('express')
var router = express.Router()
var nodemailer = require('nodemailer')

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
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.nodemaileremail,
            pass: process.env.nodemailerpassword
        }
    })

    var mailOptions = {
        from: process.env.nodemaileremail,
        to: data.email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
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
