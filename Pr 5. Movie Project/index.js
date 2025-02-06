const express = require('express');
const port = 8010;
const app = express();
const path = require('path');
const db = require('./config/db');
app.set('view engine','ejs');
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
app.use(express.urlencoded());
app.get('/',(req,res) => {
    return res.render('moviepages')
})
app.use('/',require('./routes/indexRoute'));
app.listen(port,(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
})