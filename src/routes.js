const express = require('express');
const routes = express.Router();

const TransactionController = require('./controllers/TransactionController');

routes.get('/test', (req, res) => {
    console.log('Hello World!');
    res.send({
        message: 'Hello World!'
    });
});

routes
    .get('/', TransactionController.index)
    .post('/score', TransactionController.transaction);

module.exports = routes;

