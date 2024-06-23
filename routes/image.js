const express = require('express');
const multer = require('../middlewares/multer');
const isAuthenticated = require("../middlewares/isAuthenticated");
const { uploadImage, getImage } = require('../controller/image');
const router = express.Router();

router.get('/:filename', getImage);
router.use(isAuthenticated);
router.post('/', multer.single('file'), uploadImage);

module.exports = router;
