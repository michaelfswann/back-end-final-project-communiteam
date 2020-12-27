//var schedule = require('node-schedule')
const http = require('http')

// var j = schedule.scheduleJob('42 * * * * *', function () {
//     console.log('The answer to life, the universe, and everything!')
// })


// we need to get the date from the database on post req for new ticket
let dataStringEvents = '';
const req = http.get("http://localhost:3000/events/", function(res) {
  res.on('data', chunk => {
    dataStringEvents += chunk;
  });
  res.on('end', () => {
      let allEvents = JSON.parse(dataStringEvents);
      console.log(allEvents)
      let eventDate = JSON.parse(dataStringEvents).payload.map((event)=>event.date)
      console.log(eventDate)
  });
});

req.on('error', (e) => {
  console.error(e);
});

// we need to get the email address from the database of the attendees

let dataStringEmails = '';
const request = http.get("http://localhost:3000/tickets/emails/1", function(res) {
  res.on('data', chunk => {
    dataStringEmails += chunk;
  });
  res.on('end', () => {
      let allEmails = JSON.parse(dataStringEmails);
      console.log(allEmails)
  });
});

request.on('error', (e) => {
  console.error(e);
});