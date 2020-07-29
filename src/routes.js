const express = require('express');
const routes = express.Router();

const TransactionController = require('./controllers/TransactionController');

routes
    .get('/', TransactionController.index)
    .post('/score', TransactionController.transaction);

module.exports = routes;

