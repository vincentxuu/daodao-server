const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const { createActivity,updateActivity ,getActivity,deleteActivity,changeActivityStatus} = require("../controller/activity");

router.get("", getActivity);
router.get("/:id", getActivity);
router.get("/user/:userId", getActivity);
router.use(isAuthenticated);
router.post("", createActivity);
router.put("/:id", updateActivity);
router.delete("/:id", deleteActivity);
router.put("/:id/status",changeActivityStatus)

module.exports = router;