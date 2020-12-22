var express = require('express');
var router = express.Router();

const {getAllEvents}=require('../models/index')

router.get("/", async function (req, res, next) {
  const events = await getAllEvents();
  res.json({ success: true, payload: events});
});

module.exports = router;
