const express = require('express');
const routes = express.Router();

const { loginPage , registerpage, dashboard, registeruser, loginUser, } = require('../controller/AuthController');
const { post } = require('../controller/AuthController');

const passport = require('passport');

routes.get('/',loginPage)
routes.get('/register',registerpage)
routes.get('/dashboard', passport.checkUser, dashboard)
routes.post('/registeruser', registeruser)
routes.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginUser)

module.exports = routes;