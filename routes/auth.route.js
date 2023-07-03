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
    return res.redirect('https://daodao-f2e-pi.vercel.app/signin');
});


module.exports = router;

