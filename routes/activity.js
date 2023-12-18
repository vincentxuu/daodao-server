const express = require("express");
const router = express.Router();
const { create,update ,getActivity} = require("../controller/activity");

router.get("/", getActivity);

router.get("/:userId", getActivity);

router.post("/create", create);
router.post("/update", update);

module.exports = router;