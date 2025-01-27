const express = require('express');
const port = 9000;
const app = express();
const db = require('./config/db');
app.set('view engine', 'ejs');
const user = require('./models/UserModel.js')
const userModel = require('./models/UserModel.js')
app.use(express.urlencoded());
app.use(express.static("./app/public"));

app.get('/', (req, res) => {
    return res.render('add')
})

app.post('/', (req, res) => {
    const { bookname, bookprice, bookpages, bookauthor } = req.body;
    console.log(bookname, bookprice, bookpages, bookauthor);
    user.create({
        bookname: bookname,
        bookprice: bookprice,
        bookpages: bookpages,
        bookauthor: bookauthor
    }).then((data) => {
        console.log(data);
        console.log(`record added`);
        return res.redirect('/add');
    }).catch((err) => {
        console.log(err);
        return false;
    })

})

app.get('/view', (req, res) => {
    user.find({})
        .then((data) => {
            return res.render('view', {
                record: data
            })
        }).catch((err) => {
            console.log(err);
            return false;
        })
})


app.get('/deletRecord',(req,res)=>{
    let id =req.query.deletId;
    user.findByIdAndDelete(id)
    .then((data)=>{
        console.log("user delete");
        return res.redirect('/view')
    }).catch((err)=>{
        console.log(err);
        return false;
    })
})

app.get('/editRecord', (req, res) => {
    let id = req.query.id;
    user.findById(id)
        .then((single) => {
            return res.render('edit', {
                data: single
            })
        }).catch((err) => {
            console.log(err);
            return false;
        })
})


app.post('/updateRecord',(req,res)=>{
    const {editid,bookname,bookprice,bookpages,bookauthor} =req.body;
    console.log(bookname,bookprice,bookpages,bookauthor);
    
    user.findByIdAndUpdate(editid,{
        bookname : bookname,
        bookprice : bookprice,  
        bookpages : bookpages,
        bookauthor : bookauthor,
        
    }).then((data)=>{
        console.log("user update");
        return res.redirect('/view');
    }).catch((err)=>{
        console.log(err);
        return false;
    })
})


app.post('/insertRecord', (req, res) => {
    const { bookname, bookprice,bookpages, bookauthor } = req.body;

    userModel.create({
        bookname: bookname,
        bookprice: bookprice,
        bookpages: bookpages,
        bookauthor: bookauthor,

    }).then((data, err) => {
        if (err) {
            console.log(err);
            return false;
        }
        console.log(`recorde add`);
        return res.redirect('/');
    })
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is running:- ${port}`);
})