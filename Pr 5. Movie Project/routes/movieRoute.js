const express = require('express');
const { addData, viewData, insertData, deleteData, editData, updateData } = require('../controllers/movieController');

const routes = express.Router();

const multer = require('multer');

routes.get('/',viewData);

routes.get('/add',addData);

const st = multer.diskStorage({
    destination : (req, res, cb) => {
        cb(null,'uploads');
    },
    filename : (req, file, cb) => {
        cb(null,`${file.fieldname}-${Math.floor(Math.random() * 1000000)}`);
    }
})
const fileUpload = multer({storage : st}).single('file');

routes.post('/insertdata', fileUpload, insertData);

routes.get('/deletedata',deleteData);

routes.get('/editdata',editData);

routes.post('/updatedata',fileUpload,updateData);

module.exports = routes;