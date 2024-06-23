const express = require("express");
const router = express.Router();
const passport = require("passport");
const { generateToken } = require("../services/jwt");


router.get("/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
        prompt: "select_account",
    })
);

router.get("/google/callback", passport.authenticate("google"), async(req, res) => {
    console.log("google/callback_req.session", req);
    const {_id, name} = req.user;
    const time = Date.now();
    const payload = {_id, name,time};
    const token = generateToken(payload);
    console.log("google/callback_token", token);
    return res.redirect(`${process.env.FRONTEND_URL}?id=${req.user._id}&token=${token}`);
    //TODO: different case redirect
    // res.send({
    //     status: true,
    //     data: {
    //       id: req.user.id,
    //       name: req.user.displayName,
    //       token
    //     }
    //   });
});


module.exports = router;

