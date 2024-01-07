const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/user.model");

const AUTH_OPTIONS = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL||'https://daodao-server.vercel.app/auth/google/callback'
}

passport.serializeUser((user, done) => {
    console.log("SerializeUser")
    console.log("SerializeUser:",user)
    done(null, user._id);
});

passport.deserializeUser(async (_id, done) => {
    console.log("DeserializeUser")
    let foundUser = await User.findOne({ _id });
    console.log("DeserializeUser:",foundUser)
    done(null, foundUser)
})

passport.use(new GoogleStrategy(
    AUTH_OPTIONS,
    async (accessToken, refreshToken, profile, done) => {
        console.log('passport_profile',profile);
        let foundUser = await User.findOne({ googleID: profile.id }).exec();
        if (foundUser) {
            console.log("使用者已註冊");
            return done(null, foundUser);
        } else {
            console.log("新用戶註冊");
            let newUser = new User({
                birthDay: '',
                educationStage: '',
                email: profile.emails[0].value,
                gender: '',
                googleID: profile.id,
                name: profile.displayName,
                photoURL: profile.photos[0].value,
                isOpenLocation: false,
                isOpenProfile: false,
                isSubscribeEmail_: false,
                location: '',
                selfIntroduction: '',
                share: '',
            });
            let saveUser = await newUser.save();
            console.log("成功建立新用戶")
            
            return done(null, saveUser);
        }
    })
);