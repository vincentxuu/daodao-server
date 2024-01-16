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
    console.log("google/callback_req.session", req);
    return res.redirect(`${'https://dev.daodao-notion-test.pages.dev'||'https://www.daoedu.tw'}?id=${req.user._id}`);
});


module.exports = router;

