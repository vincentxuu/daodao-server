const express = require('express');
const router = express.Router();
const sendEmail = require('../controller/sendEmail');

router.post('', sendEmail);

module.exports = router;
