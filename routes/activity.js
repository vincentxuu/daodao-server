const express = require("express");
const router = express.Router();
const { createActivity,updateActivity ,getActivity,deleteActivity} = require("../controller/activity");

router.get("/", getActivity);

router.get("/:id", getActivity);
router.get("/:userId", getActivity);

router.post("/create", createActivity);
router.post("/update", updateActivity);
router.delete("/delete/:id", deleteActivity);

module.exports = router;