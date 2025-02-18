const express = require('express');
const port = 8010;
const app = express();
app.set('view engine', 'ejs');
const path = require('path');
const db = require('./config/db')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());

//login system
const passport = require('passport');
const passportLocal =require('./config/passportLocal');
const session = require('express-session');
app.use(session({
    name: 'rnw4',
    secret: 'rnw4',
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(passport.initialize());
app.use(passport.session());
app.use('/', require('./routes/indexRoute'));
app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server is start on port :- ${port}`);

})