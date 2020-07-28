const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    console.log('Hello World!');
    res.send({
        message: 'Hello World!'
    });
})

module.exports = routes;

