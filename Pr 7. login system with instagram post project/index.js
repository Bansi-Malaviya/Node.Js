const express = require('express');
const port = 9010;
const app = express();
app.set('view engine','ejs');
const path = require('path');
const db = require('./config/db');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
app.use(express.urlencoded());

//authentication start passportjs

const passport = require('passport');
const passportLocal = require('./config/passportlocal');
const session = require('express-session');
app.use(session({
    secret: 'rnw4',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(passport.session());
app.use(passport.initialize());
app.use(passport.setUser);


//authentication ensd passportjs

app.use('/',require('./routes/indexRoute'));
app.listen(port,(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
})