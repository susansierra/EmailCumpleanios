const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
require('./database');
require('./mailer');

var corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
};
// Settings - Backend
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Settings - Views
app.set('view_engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Routes
const birthdayApiRoute = require('../routes/api/birthday');
const birthdayRoute = require('../routes/web/birthday');
const aniversarioRoute = require('../routes/web/aniversario');
const testRoute = require('../routes/test');


app.use('/api/birthday', birthdayApiRoute);
app.use('/birthday', birthdayRoute);
app.use('/anivesario', aniversarioRoute);
app.use('/', testRoute);

// require('./crontab');
const taskJob = require('./crontab');
taskJob.task.start();

module.exports = app;