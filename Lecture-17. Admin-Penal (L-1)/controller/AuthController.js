const userModel = require('../modules/UserModel');

const loginPage = (req, res) => {
return res.render('login')
}

const registerpage = (req, res) => {
return res.render('register')
}

const dashboard = (req, res) => {
return res.render('dashboard')
}

const registeruser = async (req, res) => {
    try {
       const {name, email, password , cpassword} = req.body;
       if (password == cpassword) {
        let user = await userModel.create({
            name: name,
            email: email,
            password: password
        })
        console.log("user register");
        return res.redirect('/register');
       } else {
        console.log("password and comfirm password not match");
        return res.redirect('/register');
       }
        
    } catch (err) {
        console.log(err);
        return false;
    }
}
const loginUser = async (req, res) => {
    try {
        return res.redirect('/dashboard');
    } catch (err) {
        console.log(err);
        return false;
    }
}
module.exports = {
    loginPage,
    registerpage,
    dashboard,
    registeruser,
    loginUser
}

