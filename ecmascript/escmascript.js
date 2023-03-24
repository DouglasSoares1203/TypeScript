"use strict";
//variaveis do tipo VAR possuem  hosting por isso funcionam mesmo sem ser declaradas
/*console.log('QualquerCoisa',QualquerCoisa)
var QualquerCoisa='?'*/
let QualquerCoisaLet = "?";
console.log("QualquerCoisaLet", QualquerCoisaLet);
// não funciona devido let ter escopo
//cpm vao eu consigo acessar devido ao hosting
let estaFrio = true;
if (estaFrio) {
    let acao = " Colocar o casaco";
    console.log(acao);
}
const cpf = "123.255.255-25";
//cpf='789456123-89
console.log(cpf);
//arrow Function
const somas = function (n1, n2) {
    return n1 + n2;
};
function Soma(n1, n2) {
    return n1 + n2;
}
console.log("somas", somas(2, 3));
console.log("Soma", Soma(3, 6));
const subtrair = (n1, n2) => n1 - n2;
console.log("subtrair", subtrair(2, 5));
//this
/* function normalComThis(){
        console.log(this)
    }
    normalComThis()
    const normalComThisEspecial = normalComThis.bind({nome:'Diego'})
    normalComThisEspecial()
    console.log(this)
    
    const arrowComThis =()=> console.log(this)
    arrowComThis()
    const arrowComThisEspecial = arrowComThis.bind({nome:'Diego'})
    arrowComThisEspecial()*/
//Parametro padrão
function contagemRegressiva(inicio = 5) {
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
}
function contagemRegressiva2(inicio = 5, fim = inicio - 5) {
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
}
contagemRegressiva();
contagemRegressiva2(3);
//Rest $Spread
const numbers = [1, 10, 993, -5, 200, 1034];
console.log(Math.max(...numbers));
//é a mesma coisa que
console.log(Math.max(numbers[0], numbers[1], numbers[2]));
const turmaA = ["João", "Maria", "Fernanda"];
const turmaB = ["Miguel", "Lorena", "bia", ...turmaA];
console.log(turmaB);
function retornaArray(...args) {
    return args;
}
const numeros = retornaArray(1, 2, 3, 4, 5, 345, 623);
console.log(numeros);
console.log(retornaArray(...numbers));
//reste & Spred tupla
const tupla = [1, "abc", false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
//Destruturing(array)
const caracteristicas = ["Motor zetec 1.8", 2020];
//const motor = caracteristicas[0]
//const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
//Destructuring (objeto)
const item = {
    nome: "SSD 480 GB",
    preco: 200,
    caracteristicas: {
        w: "importado",
    },
};
//convencional
const NomeItem = item.nome;
const precoItem = item.preco;
console.log(NomeItem);
console.log(precoItem);
const { nome: n, preco: p, caracteristicas: { w }, } = item;
console.log(n);
console.log(p);
console.log(w);
