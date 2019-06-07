const express = require('../../custom-express')();
const request = require('supertest')(express);

describe('#ProdutosControler', function(){
    it('listagem de produtos json', function(done){
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200,done)
    });
    it('listagem de produtos html', function(done){
        request.get('/produtos')
            .expect('Content-Type', /html/)
            .expect(200,done)
    });
})