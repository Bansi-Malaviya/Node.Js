const express = require('express');

const port = 8090;

const app = express();

const db = require('./config/db');

const path = require('path');

app.set('view engine', 'ejs');

const UserModel = require('./models/UserModel');

app.use(express.urlencoded());

const multer = require('multer');

//file upload start
const fs = require('fs');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const st = multer.diskStorage({
    destination: (req, res, cb) =>
         {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        let uniq = Math.floor(Math.random() * 10000000);
        cb(null, `${file.fieldname}-${uniq}`);
    }
})
const imageUpload = multer({ storage: st }).single('image');
//file upload end

app.get('/', (req, res) => {
    return res.render('form');
})
app.post('/adduser', imageUpload, (req, res) => {
    const { name, email, password, gender, hobby, city } = req.body;
    UserModel.create({
        username: name,
        useremail: email,
        userpassword: password,
        gender: gender,
        hobby: hobby,
        city: city,
        image: req.file?.path
    }).then((record) => {
        console.log(record);
        console.log("user create");
        return res.redirect('/');
    }).catch((err) => {
        console.log(err);
        return false;
    })
})
app.get('/viewuser', (req, res) => {
    UserModel.find({})
        .then((record) => {
            return res.render('table', {
                allrecord: record
            })
        }).catch((err) => {
            console.log(err);
            return false;
        })
})
app.get('/deleteuser', (req, res) => {
    let id = req.query.did;
    UserModel.findById(id)
        .then((singlerow) => {
            fs.unlinkSync(singlerow?.image)
        }).catch((err) => {
            console.log(err);
            return false;
        })
    UserModel.findByIdAndDelete(id)
        .then((data) => {
            console.log("record delete");
            return res.redirect('/viewuser');
        }).catch((err) => {
            console.log(err);
            return false;
        })
})
app.get('/edituser', (req, res) => {
    let id = req.query.eid;
    UserModel.findById(id)
        .then((single) => {
            return res.render('edit', {
                single
            });

        }).catch((err) => {
            console.log(err);
            return false;
        })
})
app.post('/updateuser', imageUpload, (req, res) => {
    const { editid, name, email, password, gender, hobby, city } = req.body;
    if (req.file) {
        //old image remove
        UserModel.findById(editid)
            .then((singlerow) => {
                fs.unlinkSync(singlerow?.image)
                UserModel.findByIdAndUpdate(editid, {
                    username: name,
                    useremail: email,
                    userpassword: password,
                    gender: gender,
                    hobby: hobby,
                    city: city,
                    image: req.file?.path
                }).then((user) => {
                    console.log("user update");
                    return res.redirect('/viewuser');
                }).catch((err) => {
                    console.log(err);
                    return false;
                })
            }).catch((err) => {
                console.log(err);
                return false;
            })
    } else {
        UserModel.findById(editid)
            .then((singlerow) => {
                UserModel.findByIdAndUpdate(editid, {
                    username: name,
                    useremail: email,
                    userpassword: password,
                    gender: gender,
                    hobby: hobby,
                    city: city,
                    image: singlerow?.image
                }).then((user) => {
                    console.log("user update");
                    return res.redirect('/viewuser');
                }).catch((err) => {
                    console.log(err);
                    return false;
                })
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
})
app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is start http://localhost:${port}`);
})