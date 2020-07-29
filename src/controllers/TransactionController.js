const transactions = require('../database/transactions.json');

module.exports = {

    //Getting all the transactions 
    index(req, res) {

        res.send({ transactions });
    },

    //Getting the score for all the transaction
    score(req, res) {
        // console.log(req.body);
        
        const { value, ip_location, card_hold_name } = req.body;
        const { name, state, phone } = req.body.customer;

        return res.send({
            value, ip_location, card_hold_name, name, state, phone
        });

        return 0;
    }
}