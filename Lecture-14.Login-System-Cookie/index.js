const express = require('express');

const port = 9090;

const app = express();

app.set('view engine','ejs');

const db = require('./config/db');

const cookieparser = require('cookie-parser');
app.use(cookieparser());

app.use(express.urlencoded());

app.use('/',require('./routes/indexRoute'));

app.listen(port,(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
})
