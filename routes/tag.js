const express = require("express");
const router = express.Router();
const { getTopTags } = require("../controller/tag");

router.get("/", getTopTags);

module.exports = router;