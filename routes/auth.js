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
    return res.redirect(`${'https://www.daoedu.tw'||'https://daodao-f2e-pi.vercel.app'||'https://daodao-f2e-daodaoedu.vercel.app'|| 'http://localhost:5000'||'https://dev.daodao-notion-test.pages.dev'}?id=${req.user._id}`);
});


module.exports = router;

