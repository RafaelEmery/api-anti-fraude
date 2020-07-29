const express = require('express');
const routes = require('./routes');
const app = express();

//Configurando o uso de JSON para requests e as rotas
app.use(express.json());
app.use(routes);

//Definindo a exibição de erros
app.use((error, req, res, next) => {

    res.status(error.status || 500);
    res.json({
        error: error.message
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000.')
});