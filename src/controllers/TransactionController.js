const transactions = require('../data/transactions.json');
const getScore = require('../utils/score');

module.exports = {

    //Usado para vizualizar as transações do arquivo
    index(req, res, next) {
        try {
            return res.send({ transactions });

        } catch (error) {
            next(error)
        }
    },

    //Verificando a pontuação da transação
    transaction(req, res, next) { 
        try {
            const { id } = req.body;
            const score = getScore({
                transaction: req.body
            });

            return res.send({ id, score });    

        } catch (error) {
           next(error) 
        }

        return 0;
    }
}