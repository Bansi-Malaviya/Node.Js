const User = require('../models/UserModel');

const loginPage = (req, res) => {
    return res.render('login')
}
const registerPage = (req, res) => {
    return res.render('register')
    
}
const registerUser = async (req, res) => {
    try {
        const { name, email, password, cpassword } = req.body;
        if (password === cpassword) {
            const user = await User.create({
                name: name,
                email: email,
                password: password
            })
            console.log("user create");
            return res.redirect('/');
        } else {
            console.log(`password and confirm password not match`);
            return res.redirect('/register')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
const dashboardPage = async (req, res) => {
    return res.render('dashboard');
}
const loginUser = async (req, res) => {
    try {
        return res.redirect('/dashboard')
    } catch (err) {
        console.log(err);
        return false;
    }
}
module.exports = {
    loginPage, registerPage, dashboardPage,registerUser,loginUser
}