const express = require('express');
const { registerPage, loginPage, registerUser, dashboardPage, aboutPage, contactPage, loginUser, logoutUser } = require('../controllers/authController');
const { checkUserLogin } = require('../middleware/checkUser');

const routes = express.Router();

routes.get('/register',registerPage);
routes.get('/',loginPage);
routes.post('/loginuser',loginUser)
routes.post('/registeruser',registerUser);
routes.get('/dashboard', checkUserLogin, dashboardPage);
routes.get('/about', checkUserLogin, aboutPage);
routes.get('/contact', checkUserLogin, contactPage);
routes.get('/logoutuser',logoutUser);

module.exports = routes;