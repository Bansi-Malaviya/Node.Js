const express = require("express");
const port = 9010;
const app = express();
app.set('view engine','ejs');

const path = require('path');
app.use('/',express.static(path.join(__dirname, 'public')))

app.get('/',(req,res) => {
    return res.render('dashboard');
})

app.get('/charts',(req,res) => {
    return res.render('charts');
})
app.get('/widgets',(req,res) => {
    return res.render('widgets');
})
app.get('/tables',(req,res) => {
    return res.render('tables');
})
app.get('/grid',(req,res) => {
    return res.render('grid');
})
app.get('/form-basic',(req,res) => {
    return res.render('form-basic');
})
app.get('/form-wizard',(req,res) => {
    return res.render('form-wizard');
})
app.get('/pages-buttons',(req,res) => {
    return res.render('pages-button');
})

app.listen(port,(err) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
})