const CategoryModel = require('../models/CategoryModel')
const SubCategoryModel = require('../models/SubcategoryModel')


const addsubCategorypage = async (req, res) => {
    try {
        let categories = await CategoryModel.find({ status: 'active' });
        return res.render('subcategory/add_subcategory', {
            category: categories
        })

    } catch (err) {
        console.log(err);
        return false;

    }
}

const viewsubCategorypage = (req, res) => {
    return res.render('subcategory/view_subcategory')
}
const insertSubcategory = async (req, res) => {
    try {
        const { category, subcategory } = req.body;
        await SubCategoryModel.create({
            categoryId: category,
            subcategory: subcategory
        })
        req.flash('success', "subcategory successfully create");
        return res.redirect('/subcategory/addsubcategorypage')
    } catch (err) {
        console.log(err);
        return false;
    }
}
module.exports = {
    addsubCategorypage, viewsubCategorypage, insertSubcategory
}