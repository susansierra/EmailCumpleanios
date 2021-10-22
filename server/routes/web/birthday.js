const express = require('express');
const router = express.Router();


// Controller
const birthdayController = require('../../controllers/birthdayController');

router.get('/', birthdayController.birthday_by_month);


module.exports = router;