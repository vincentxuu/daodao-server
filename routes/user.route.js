const express = require("express");
const router = express.Router();
const { profile, update ,getUser,getAllUser} = require("../controller/user.controller");
const { isUserAuthenticated } = require("../middlewares/auth");


const CLIENT_URL = "http://localhost:5000";

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

// router.get("/current_user", (req, res) => {
// 	console.log("/current_user.req:",req);
// 	console.log("req.session:",req.session)
// 	console.log("req.session.passport.user:",req.session.passport.user)

//     if (req.user) {
// 		res.status(200).json({
// 			error: false,
// 			message: "Successfully Loged In",
// 			user: req.user,
// 		});
// 	} else {
// 		res.status(403).json({ error: true, message: "Not Authorized" });
// 	}
//   });

router.get("/current_user", profile);

router.post("/update", update);

router.post("/one_User", getUser);

router.get("/all_User", getAllUser);

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
  });

module.exports = router;