const express = require('express');

const routes = express.Router();

routes.use('/movie',require('./movieRoute'));

module.exports = routes;