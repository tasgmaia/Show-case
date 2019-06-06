function ProdutoDao(connection){
    this._connection = connection;
};

ProdutoDao.prototype.livros = function (callback) {
    this._connection.querry ('SELECT * FROM livros', callback)
}

module.exports = function () {
    return ProdutoDao;
};