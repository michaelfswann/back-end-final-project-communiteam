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

var mailOptions = {
    from: emailAddress,
    to: emailAddress,
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

module.exports = transporter
