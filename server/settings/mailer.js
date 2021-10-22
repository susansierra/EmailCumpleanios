const nodemailer = require('nodemailer');
require('dotenv');

var transportConfig = {
    service: process.env.MAILER_SERVICE,
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    secure: process.env.MAILER_SECURE,
    auth:{
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASSWORD
    }
};


const mailerTransport = nodemailer.createTransport(transportConfig);

mailerTransport.verify()
.then(()=> console.log('Ready to send emails'))
.catch(error => console.log(error));

exports.mailerTransport = mailerTransport;