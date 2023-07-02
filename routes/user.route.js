const express = require("express");
const router = express.Router();
const { profile, update ,getAllUser} = require("../controller/user.controller");
const { isUserAuthenticated } = require("../middlewares/auth");


const CLIENT_URL = "https://daodao-f2e-pi.vercel.app";

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

router.get("/current_user", (req, res) => {
	console.log("/current_user.req",req)
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

router.post("/update", update);

router.get("/all_User", getAllUser);

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
  });

module.exports = router;