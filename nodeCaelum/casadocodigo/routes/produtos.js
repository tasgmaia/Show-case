module.exports = function (app){
    app.get('/produtos', function(req, res){

        const connection = app.infra.connectionFactory();
        const produtos = new app.infra.ProdutoDao(connection);
        produtos.lista(function(error, results, fields){
            res.format({
                html:function(){
                    res.render('produtos/lista', {livros:results});
                },
                json:function(){
                    res.json(results);
                }
            });
        });
        // produtoDao.lista(function(error, results, fields){
        //     res.render('produtos/lista', {livros:results});
        // });
        connection.end();
    });

    app.post('/produtos', function(req, res){
        const livro = req.body;
        req.assert('titulo', 'Titulo deve ser preenchido').notEmpty();
        req.assert('preco', 'Preco deve ser um numero').isFloat();
        const errors = req.validationErrors();
        if (errors){
            console.log('há erros de validação!');
            res.format({
                html: function (){
                    res.status(400).render('produtos/form', { validationErrors: errors });
                },
                json: function (){
                    res.status(400).send(errors);
                }
            });
            return;
        } 
        const connection = app.infra.connectionFactory();
        const produtoDao = new app.infra.ProdutoDao(connection);
        produtoDao.salva(livro, function(exception, results){
            res.redirect('/produtos');
        });
    });
    app.get ('/produtos/form', function(req, res){
        res.render('produtos/form')
    });
    
};