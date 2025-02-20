const userModel = require('../models/usersModel')

const registerPage = (req,res) => {
    return res.render('register');
}

const loginPage = (req,res) => {
    if(req.cookies?.auth){
        return res.redirect('/dashboard');
    }
    return res.render('login');
}

const loginUser = async (req,res) => {
    try{
        const { email, password } = req.body;
        const user = await userModel.findOne({ email : email });

        if(!user || user.password != password){
            console.log(`Email Or Password is incorrect`);
            return res.redirect('/');
        }

        res.cookie('auth',user);
        return res.redirect('/dashboard');
    }catch(err){
        console.log(err);
        return false;
    }
}

const registerUser = async (req,res) => {
    try{
        const {name,email,password} = req.body;

        await userModel.create({
            name : name,
            email : email,
            password : password
        });
        console.log("Data added..!");
        return res.redirect('/');
    }catch(err) {
        console.log(err);
        return false;
    }
} 

const dashboardPage = (req,res) => {
    // if(!req.cookies?.auth){
    //     return res.redirect('/');
    // }
    return res.render('dashboard');
}

const contactPage = (req,res) => {
    return res.render('contact');
}

const aboutPage = (req,res) => {
    return res.render('about');
}

const logoutUser = (req,res) => {
    res.clearCookie('auth');
    return res.redirect('/');
}

module.exports = {
    registerPage,
    loginPage,
    loginUser,
    registerUser,
    dashboardPage,
    contactPage,
    aboutPage,
    logoutUser
}