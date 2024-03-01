const express = require("express");
const router = express.Router();
const { createActivity,updateActivity ,getActivity,deleteActivity,changeActivityStatus} = require("../controller/activity");

router.get("", getActivity);

router.get("/:id", getActivity);
router.get("/user/:userId", getActivity);

router.post("", createActivity);
router.put("/:id", updateActivity);
router.delete("/:id", deleteActivity);
router.put("/:id/status",changeActivityStatus)

module.exports = router;