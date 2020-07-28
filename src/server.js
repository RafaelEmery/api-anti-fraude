const express = require('express');
const routes = require('./routes');
const app = express();

//Using all the routes
app.use(routes);

app.listen(3000, () => {
    console.log('Server running on port 3000.')
});