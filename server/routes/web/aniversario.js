const express = require('express');
const router = express.Router();


//Controller
const aniversarioController = require('../../controllers/aniversarioController');

router.get('/', aniversarioController.aniversario_by_month);



module.exports = router;