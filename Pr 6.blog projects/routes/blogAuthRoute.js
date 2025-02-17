const express = require('express');
const { registerPage, loginPage, registerUser, dashboardPage, loginUser, logoutUser, addBlogPage, viewBlogPage, addBlogData, deleteBlogData, editBlogData, updateBlogData } = require('../controllers/blogAuthController');
const { checkUserLogin } = require('../middleware/checkBlogUser');

const routes = express.Router();

const multer = require('multer');


routes.get('/register',registerPage);
routes.get('/',loginPage);
routes.post('/loginuser',loginUser)
routes.post('/registeruser',registerUser);
routes.get('/dashboard', checkUserLogin, dashboardPage);
routes.get('/logoutuser',logoutUser);

routes.get('/addblogpage', checkUserLogin,addBlogPage);
routes.get('/viewblogpage', checkUserLogin,viewBlogPage);


const st = multer.diskStorage({
    destination : (req, res, cb) => {
        cb(null,'uploads');
    },
    filename : (req, file, cb) => {
        cb(null,`${file.fieldname}-${Math.floor(Math.random() * 1000000)}`);
    }
})
const fileUpload = multer({storage : st}).single('image');

routes.post('/addblogdata',fileUpload, addBlogData);

routes.get('/deletedata',deleteBlogData);
routes.get('/editblogdata',editBlogData);

routes.post('/updateblogdata',fileUpload,updateBlogData)

module.exports = routes;