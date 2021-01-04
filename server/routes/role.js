var express = require('express')
var router = express.Router()

const getRoleMessage = () => {
    return {
        message:
            'The API successfully validated your access token and permissions.'
    }
}

router.get('/', async function (req, res, next) {
    const message = getRoleMessage()
    res.json({ success: true, payload: message })
})

module.exports = router
