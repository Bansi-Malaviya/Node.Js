const express = require('express');
const routes = express.Router();
const { addsubCategorypage, viewsubCategorypage, insertSubcategory } = require('../controller/SubcategoryController');

routes.get('/', viewsubCategorypage)
routes.get('/addsubcategorypage', addsubCategorypage);
routes.post('/insertsubcategory', insertSubcategory)

module.exports = routes;