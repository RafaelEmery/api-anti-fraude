// const transactions = require('../database/transactions.json');
const getScore = require('../utils/score');

module.exports = {

    //Verificando a pontuação da transação
    transaction(req, res, next) { 
        try {
            const { id } = req.body;
            const score = getScore({
                transaction: req.body
            });

            return res.send({
                id, score
            });     
        } catch (error) {
           next(error) 
        }

        return 0;
    }
}