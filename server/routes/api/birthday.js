const express = require('express');
const router = express.Router();

// Controller
const birthdayController = require('../../controllers/api/birthdayController');

// router.get('/', birthdayController.get_birthday);
router.get('/', birthdayController.birthday_by_month);

module.exports = router;