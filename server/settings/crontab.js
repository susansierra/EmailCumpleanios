const node_cron = require('node-cron');

const birthdayController = require('../controllers/birthdayController');
const aniversarioController = require('../controllers/aniversarioController');



const task = node_cron.schedule(' 0 6 * * *', ()=>{
    birthdayController.birthday_by_month();
});

const task_aniversario = node_cron.schedule(' 15 11 * * *', ()=>{
    aniversarioController.aniversario_by_month();
});


exports.task = task;