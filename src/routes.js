const express = require('express');
const routes = express.Router();
const PlateSearchController = require('./controllers/PlateSearchController')

// Plate search endpoints
routes.post('/plate/search/:plate', PlateSearchController.search);

module.exports = routes

