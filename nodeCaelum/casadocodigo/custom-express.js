const express = require('express');
const app = express();
const load = require('express-load')
module.exports = function(){
    const app = express();
    app.set('view engine', 'ejs');
    load('routes')
        .then('infra')
        .into(app);
    return app;
};