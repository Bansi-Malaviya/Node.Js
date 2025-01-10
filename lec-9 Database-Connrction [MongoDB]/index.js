const express = require('express');
const port = 8010;
const app = express();

constdb = require('./config/db');

app.listen(port,(err) =>{
    if (err) {
        console.log(err);
        return false;
    }
    console.log('Server is running on port http://localhost ${port}');
})