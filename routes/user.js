const express = require("express");
const router = express.Router();
const { update ,getPartner} = require("../controller/user");
const isAuthenticated = require("../middlewares/isAuthenticated");

const CLIENT_URL = process.env.FRONTEND_URL;

router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

router.get("/", getPartner);
router.get("/:id", getPartner);
router.use(isAuthenticated);
router.put("/:id", update);

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
  });

module.exports = router;