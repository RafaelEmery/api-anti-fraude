const express = require('express');
const routes = express.Router();
const { celebrate, Joi, Segments } = require('celebrate');

const TransactionController = require('./controllers/TransactionController');

routes
    .get('/', TransactionController.index)
    
    //Validando os campos da transacao em forma de Middleware com o pacote Celebrate
    //Exibe uma mensagem de erro de acordo com as regras
    .post('/score', celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
            value: Joi.number().required(),
            paid_at: Joi.string().length(19).required(),
            ip_location: Joi.string().length(5).required(),
            card_hold_name: Joi.string().required(),
            
            //Validando os campos do cliente
            customer: Joi.object().keys({
                id: Joi.string().required(),
                name: Joi.string().required(),
                birth_date: Joi.string().length(10).required(),
                state: Joi.string().length(5).required(),
                phone: Joi.string().length(13).required(),
            }).required()
        })
    }) ,TransactionController.transaction);

module.exports = routes;

