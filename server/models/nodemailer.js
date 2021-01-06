const nodemailer = require('nodemailer')

const emailAddress = process.env.EMAIL_ADDRESS
const emailPassword = process.env.EMAIL_PASSWORD

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: emailAddress,
        pass: emailPassword
    }
})
/* 
var mailOptions = {
    from: emailAddress,
    to: emailAddress,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
}
 */

function newTicketEmail(attendeeEmail, event) {
    const mailOptions = {
        from: emailAddress,
        to: attendeeEmail,
        subject: `Your ticket for ${event.title}`,
        text: `You have booked a ticket for ${event.title} on ${event.date} at ${event.time}`
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
}

module.exports = { newTicketEmail }
