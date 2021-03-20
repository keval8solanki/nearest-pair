const path = require('path');

const express = require('express');
const indexController = require('../controllers/index_controller');

const router = express.Router();

router.get('/getdata', indexController.getData);




module.exports = router;
