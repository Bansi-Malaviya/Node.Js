const { users, bloguser, blogUser } = require('../models/usersModel');

const fs = require('fs');

const registerPage = (req, res) => {
    return res.render('register');
}

const loginPage = (req, res) => {
    if (req.locals?.users) {
        return res.redirect('/dashboard');
    }
    return res.render('login');
}

const loginUser = async (req, res) => {
    try {

        return res.redirect('/dashboard');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        await users.create({
            name: name,
            email: email,
            password: password
        });
        console.log("Data added..!");
        return res.redirect('/');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const dashboardPage = async (req, res) => {
    try {
        const record = await users.find({});
        return res.render('dashboard', { record });
    }
    catch {
        console.log(err);
        return false;

    }
}


const addBlogPage = (req, res) => {
    return res.render('addBlog');
}

const viewBlogPage = async (req, res) => {
    try {
        return res.render('viewBlog', {
            allBlogs: await blogUser.find({})
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addBlogData = async (req, res) => {
    try {
        const { title, description } = req.body;
        console.log(title);
        console.log(description);
        console.log(req.file);


        await blogUser.create({
            title: title,
            description: description,
            image: req.file?.path
        })
        console.log(`Data Successfully added..!`);
        return res.redirect('/viewblogpage');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteBlogData = async (req, res) => {
    try {
        let single = await blogUser.findById(req.query.delId)
        fs.unlinkSync(single?.image);

        await blogUser.findByIdAndDelete(req.query.delId);
        console.log(`Data Successfully deleted..!`);
        return res.redirect('/viewblogpage');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editBlogData = async (req, res) => {
    try {
        return res.render('editBlog', {
            oneRow: await blogUser.findById(req.query.editId)
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateBlogData = async (req, res) => {
    try {
        const { editId, title, description } = req.body;

        if (req.file) {
            let oneRow = await blogUser.findById(editId);
            fs.unlinkSync(oneRow?.image);
            await blogUser.findByIdAndUpdate(editId, {
                title: title,
                description: description,
                image: req.file?.path
            })
            console.log("Data Successfully updated..!");
            return res.redirect('/viewblogpage');
        } else {
            await blogUser.findByIdAndUpdate(editId, {
                title: title,
                description: description,
                image: req.file?.path
            })
            console.log("Data Successfully updated..!");
            return res.redirect('/viewblogpage');
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const logoutUser = (req, res) => {
   
    return res.redirect('/');
}

module.exports = {
    registerPage,
    loginPage,
    loginUser,
    registerUser,
    dashboardPage,
    logoutUser,
    addBlogPage,
    viewBlogPage,
    addBlogData,
    deleteBlogData,
    editBlogData,
    updateBlogData
}