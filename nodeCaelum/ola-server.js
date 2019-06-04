const http = require('http');
const porta = 3000;
const ip = 'localhost';

http.createServer(function(req, res){
    console.log('Recebendo request!');
    res.end(`<html><body><h1>Uma mensagem na tela!</h1></body></html>`);
}).listen(porta, ip);

console.log('Servidor executando em http://'+ ip + ':' + porta);