const express = require('express');
const { mongoConnect } = require('./services/mongo');
const cors = require("cors");
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const partnerRoutes = require('./routes/user');
const tagRoutes = require('./routes/tag');
const session = require("express-session");
const passport = require("passport");
require("./services/passport");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(
    cors({
      origin: [process.env.FRONTEND_URL,'https://daodao-f2e-daodaoedu.vercel.app','https://daodao-f2e-pi.vercel.app'],
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );

app.use(session({
    secret: process.env.SESSION_SEVRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
}))
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/tag', tagRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

async function startServer() {
    await mongoConnect();
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`)
    });
}

startServer();
