const express = require('express');
const { registerPage, loginPage, registerUser, dashboardPage, loginUser, logoutUser, addBlogPage, viewBlogPage, addBlogData, deleteBlogData, editBlogData, updateBlogData } = require('../controllers/blogAuthController');


const routes = express.Router();

const multer = require('multer');
const passport = require('passport');


routes.get('/register',registerPage);
routes.get('/',loginPage);
routes.post('/loginuser',passport.authenticate('local',{failureRedirect:'/'}),loginUser)
routes.post('/registeruser',registerUser);
routes.get('/dashboard',passport.checkUser,dashboardPage);
routes.get('/logoutuser', logoutUser);
routes.get('/addblogpage',addBlogPage);
routes.get('/viewblogpage',viewBlogPage);


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