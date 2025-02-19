const express = require('express');
const routes = express.Router();
const { addCategoryPage, viewCategoryPage, insertCategory } = require('../controller/CategoryController');

routes.get('/', viewCategoryPage)
routes.get('/addcategorypage', addCategoryPage)
routes.post('/insertcategory', insertCategory)

module.exports = routes;