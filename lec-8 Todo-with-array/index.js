const express = require('express');
const port = 8000;
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded());
let record = [];
app.get('/', (req, res) => {
    return res.render('table',{
        record
    });
})
app.get('/add', (req, res) => {
    return res.render('form');
})
app.post('/adduser', (req, res) => {
    const { username, userphone } = req.body;
    let obj = {
        id: Math.floor(Math.random() * 1000000),
        name: username,
        phone: userphone
    }
    record.push(obj);
    console.log("successfully register");
    return res.redirect('/');
})

app.get('/deleteuser', (req, res) => {
    let id = req.query.deleteId
    let deletedata = record.filter(val => val.id != id);
    record = deletedata;
    return res.redirect('/')
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port: http://localhost: ${port}`);
})