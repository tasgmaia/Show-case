const connectionFactory = require('../infra/connectionFactory')
const ProdutoDao = require('../infra/ProdutoDao')

module.exports = function (app){
    app.get('/produtos', function(req, res){

        const connection = app.infra.connectionFactory();
        const ProdutoDao = new app.infra.ProdutoDao(connection);
        ProdutoDao.lista(function(error, results, fields){
            res.render('produtos/lista', {livros:results});
        });

        connection.end();
    });
    app.get ('/produtos/form', function(req, res){
        res.render('produtos/form')
    });
};