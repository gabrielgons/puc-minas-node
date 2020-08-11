/*
Para aprender, criei um package no npm.
portanto utilizo apenas o index.js
instalar o pacote:
npm i package-atividade-pratica-unidade-2-puc-minas
*/

const funcoes = require('package-atividade-pratica-unidade-2-puc-minas');

const calculos = [
    { n1: 1, n2: 1, funcao: funcoes.adicao },
    { n1: -123, n2: 123123, funcao: funcoes.adicao },
    { n1: 8, n2: 0, funcao:  funcoes.multiplicacao },
    { n1: 1239123, n2: 12313, funcao: funcoes.multiplicacao },
    { n1: 123, n2: -12, funcao: funcoes.divisao },
    { n1: 313123, n2: 0, funcao: funcoes.divisao },
];

calculos.forEach(calculo => {
    try {
        console.log(`O resultado de ${calculo.n1} ${calculo.funcao.operador} ${calculo.n2} é: ${calculo.funcao.calcular(calculo.n1,calculo.n2)}`);
    } catch (ex) {
        console.log(ex.message);
    }
});