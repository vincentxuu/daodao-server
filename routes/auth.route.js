const express = require("express");
const router = express.Router();
const passport = require("passport");


router.get("/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
        prompt: "select_account",
    })
);

router.get("/google/callback", passport.authenticate("google"), async(req, res) => {
    return res.redirect('http://localhost:5000/signin');
});


module.exports = router;

