const express = require('express');
const app = express();
app.get('/', (req, res) => {
    return res.send ('Olá ' + req.query.name)
});
app.listen(3333);


//PAREI NO VIDEO 2 em 11 minutos