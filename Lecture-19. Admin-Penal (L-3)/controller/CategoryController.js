const CategoryModel = require('../models/CategoryModel');
const addCategoryPage = (req, res) => {
    return res.render('category/add_category')
}
const viewCategoryPage = async (req, res) => {
    try {
        let categories = await CategoryModel.find({});
        return res.render('category/view_category', {
            category: categories
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}
const insertCategory = async (req, res) => {
    try {
        const { category } = req.body;
        const add = await CategoryModel.create({
            category: category
        })
        req.flash('success', 'category add successfully')
        return res.redirect('/category/addcategorypage');
    } catch (err) {
        console.log(err);
        return false;
    }
}
module.exports = {
    addCategoryPage, viewCategoryPage, insertCategory
}