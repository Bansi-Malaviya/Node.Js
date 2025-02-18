const express = require('express');

const routes = express.Router();

routes.use('/',require('./blogAuthRoute'));

module.exports = routes;