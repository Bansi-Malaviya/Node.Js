const Users = require('../models/UserModel');

const fs = require('fs')

// registerPage
const registerPage = (req, res) => {
    return res.render('register');
}

// loginpage 
const loginPage = (req, res) => {
    if (req.cookies?.auth) {
        return res.redirect('/dashboard')
    }
    return res.render('login');
}

// loginuser 
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.users.findOne({ email: email });

        if (!user || user.password != password) {
            console.log('PLEASE ENTER VALID PASS & EMAIL');
            return res.redirect('/');
        }
        res.cookie('auth', user);
        return res.redirect('/dashboard');
    } catch (err) {
        console.log(err);
        return false
    }

}

//register user 
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await Users.users.create({
            name: name,
            email: email,
            password: password
        })
        console.log('USER REGISTER');
        return res.redirect('/');
    } catch (err) {
        console.log(err);
        return false;
    }
}

// dashboardpage 
const dashboardPage = (req, res) => {
    return res.render('dashboard')
}

// addblogpage 
const addBlogPage = (req, res) => {
    return res.render('addblog')
}

// viewblogpage 
const viewBlogPage = async(req,res) => {
    try{
        return res.render('viewblog',{
            allBlogs : await Users.blogUser.find()
        });
    }catch(err) {
        console.log(err);
        return false
    }
}

// add data 
const addBlogUser = async(req,res) => {
    try{
        const {title,description,date} = req.body;
        await Users.blogUser.create({
            title : title,
            description: description,
            date :date,
            image : req.file?.path
        })
        console.log(`DATA ADD..!`);
        return res.redirect('/viewblog')
    }catch(err){
        console.log(err);
        return false;
    }
}

// delete data 
const deleteBlogUser = async(req,res) => {
    try{
        let single = await Users.blogUser.findById(req.query.deleteId);
        fs.unlinkSync(single?.image)
        await Users.blogUser.findByIdAndDelete(req.query.deleteId)
        console.log(`DATA DELETE..!`);
        return res.redirect('/viewblog')
    }catch(err){
        console.log(err);
        return false
    }
}

// edit data 
const editBlogUser = async (req,res) => {
    try{
        return res.render('editblog',{
             singleRow : await Users.blogUser.findById(req.query.editId)
        })
    }catch(err){
        console.log(err);
        return false
    }
}

// update data 
const updateBlogUser = async(req,res) => {
    try{
        const { editId,title,description,date} = req.body;
        if (req.file) {
            let singleRow = await Users.blogUser.findById(editId);
            fs.unlinkSync(singleRow?.image);
            await Users.blogUser.findByIdAndUpdate(editId,{
                title : title,
            description: description,
            date : date,
            image : req.file?.path
            })
            console.log(`DATA UPDATE`);
            return res.redirect('/viewblog')
        }
    }catch(err){
        console.log(err);
        return false
    }
}


// logoutuser 
const logoutUser = (req, res) => {
    res.clearCookie('auth');
    return res.redirect('/')
}


module.exports = {
    registerPage,
    loginPage,
    dashboardPage,
    registerUser,
    logoutUser,
    loginUser,
    addBlogPage,
    addBlogUser,
    deleteBlogUser,
    editBlogUser,
    updateBlogUser,
    viewBlogPage
}


