
const express = require('express');
// sets up express application and can configure and add functionality to server
const app = express();
const path = require('path');

// loads dependencies
var bodyParser = require('body-parser');

// loads package
const nodemailer = require(`nodemailer`);
// environment variabels from .env file
require('dotenv').config();

// var smtpTransport = nodemailer.createTransport("SMTP", {

//     service: 'Gmail',
//     auth: {
//         // enter your gmail account
//         user: 'GMAIL_USER',
//         // enter your gmail password
//         pass: 'GMAIL_PASS'
//     }
// });

// logs to server all requests, see on terminal
const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url, request.method);
  next();
};

app.use(urlLogger);
// specified path for all static asset files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  // send file at ./index location, server sends index.html to user
  response.sendFile(path.join(__dirname, "./index.html"));
});
// app.get('/index.html', (request, response) => {
//   // send file at ./index location, server sends index.html to user
//   response.sendFile(path.join(__dirname, "./index.html"));
// });

app.get('/json', (request, response) => {
  // send 200 status to notify client that response was successful
  response.status(200).json({"name": "Robbie"});
});

// tells server to listen for connections on a particular port (3000)
app.listen(3000, () => {
  // when ready to listen for connections, callback is called, logging the below message
  console.log('Express intro running on localhost:3000');
});

// RECEIVING POST REQUEST FROM javascript.JS
// when post to server of /send, this function runs
// app.post('/send', function (req, res) {

//     var mailOptions = {
//         to: req.query.to,
//         subject: 'Contact Form Message',
//         from: "Contact Form Request" + "<" + req.query.from + '>',
//         html:  "From: " + req.query.name + "<br>" +
//                "User's email: " + req.query.user + "<br>" +     "Message: " + req.query.text
//     }

//     console.log(mailOptions);

//     smtpTransport.sendMail(mailOptions, function (err, response) {
//         if (err) {
//             console.log(err);
//             res.end("error");
//         } else {
//             console.log("Message sent: " + response.message);
//             res.end("sent");
//         }
//     });

// });







