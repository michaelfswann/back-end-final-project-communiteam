var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.nodemaileremail,
    pass: process.env.nodemailerpassword
  }
});

var mailOptions = {
  from: process.env.nodemaileremail,
  to: process.env.nodemailertestrecipient,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 

// node -r dotenv/config nodemailer.js to send an email