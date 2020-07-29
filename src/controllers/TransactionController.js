const transactions = require('../data/transactions.json');
const getScore = require('../utils/score');

module.exports = {

    /**
     * Endpoint que retorna todos as transações presentes em src/data/transactions.json
     * @param {*} req requisição enviada
     * @param {*} res resposta que a função irá retornar
     * @param {*} next auxilia no tratamento de erros
     * @returns {res} todas as transações do arquivo json
     */
    index(req, res, next) {
        try {
            return res.send({ transactions });

        } catch (error) {
            next(error)
        }
    },

    /**
     * Endpoint que recebe um array e retorna a pontuação do risco de fraude
     * @param {*} req requisição que contém o array no corpo
     * @param {*} res resposta que a função irá retornar
     * @param {*} next auxilia no tratamento de erros
     * @returns {res} o id da transação e a pontuação (score)
     */
    transaction(req, res, next) { 
        try {
            const { id } = req.body;
            const score = getScore({ transaction: req.body });

            return res.send({ id, score }); 
               
        } catch (error) {
           next(error) 
        }

        return 0;
    }
}