const express = require("express");
const router = express.Router();
const { createActivity,updateActivity ,getActivity,deleteActivity} = require("../controller/activity");

router.get("", getActivity);

router.get("/:id", getActivity);
router.get("/user/:userId", getActivity);

router.post("", createActivity);
router.put("/:id", updateActivity);
router.delete("/:id", deleteActivity);

module.exports = router;