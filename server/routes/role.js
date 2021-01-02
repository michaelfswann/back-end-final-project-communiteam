var express = require('express')
var router = express.Router()

router.get('/', async function (req, res, next) {
    res.send({ msg: 'You called the role endpoint!' })
})

module.exports = router
