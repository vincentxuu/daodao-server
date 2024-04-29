const express = require('express');
const router = express.Router();
const sendEmail = require('../controller/sendEmail');
const isAuthenticated = require('../middlewares/isAuthenticated');

router.use(isAuthenticated);
router.post('', sendEmail);

module.exports = router;
