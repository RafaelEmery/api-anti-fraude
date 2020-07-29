/**
 * Função auxiliar que implementa as regras e incrementa a pontuação (score) de acordo com as verificações
 * @param {Object} params é um objeto contendo uma transação
 * @returns {number} score (total da pontuação) para o risco de fraude
 */
module.exports = function getScore(params = {}) {
    const { value, paid_at, ip_location, card_hold_name } = params.transaction;
    const { name, birth_date, state } = params.transaction.customer;
    let score = 0;

    //Evidencias graves de fraude
    if (card_hold_name != name) {
        score += 40;
        console.log('Nomes diferentes: ', score);
    } 

    if (ip_location != state) {
        score += 40;
        console.log('Locais diferentes: ', score);
    }

    //Evidencias moderadas de fraude
    const birth_year = birth_date.split('-', 1);
    const paid_at_year = paid_at.split('-', 1);

    if ((paid_at_year - birth_year) <= 17) {
        score += 10;
        console.log('Pagamento feito por menor de idade: ', score);
    }

    //Maior que a média de valor das transacoes
    if (value >= 372.41) {
        score += 10;
        console.log('Valor de compra alto: ', score);
    }

    return score;
}
