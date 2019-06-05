// Crie uma função que dado o objeto a seguir:
// var endereco = {
//  rua: "Rua dos pinheiros",
//  numero: 1293,
//  bairro: "Centro",
//  cidade: "São Paulo",
//  uf: "SP"
// };
// Retorne o seguinte conteúdo:
// O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
// nº 1293.

function message (address){
    return(
        'O usuário mora em '+
        address.city +
        ' / '+ 
        address.state + 
        ', no bairro ' + 
        address.neighborhood + 
        ', na rua ' +
        address.street + 
        ', número' + 
        address.number 

    )
}


var address = {
     street: "dos pinheiros",
     number: 1293,
     neighborhood: "Centro",
     city: "São Paulo",
     state: "SP"
    };

console.log(message(address))