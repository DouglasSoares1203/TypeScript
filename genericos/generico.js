"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo("João").length);
console.log(echo(27).length);
console.log(echo({ nome: "minas", idade: 25 }));
/******generics ********/
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado("Minas").length);
///console.log(echoMelhorado(27).lenght) vai da erro mais eu psso assumir que ele é um numbercomo abaixo
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: "Minas", idade: 27 }));
/*******Generiscs disponiveis na API ******/
const avaliacoes = [10, 7.5, 3.1];
avaliacoes.push(7.69);
///avaliacoes.push('minas') vai dar erro porque eu especificquei logo acima
console.log(avaliacoes);
//Array
function imprimir(args) {
    args.forEach((element) => console.log(element));
}
imprimir([1, 5, 9, 8, 7]);
imprimir([5, 6, 9, 8]);
imprimir(["pizza", "sorvete", "chocolate"]);
imprimir([
    { nome: "minas", idade: 25 },
    { nome: "douglas", idade: 28 },
    { nome: "dom", idade: 33 },
]);
imprimir([
    { nome: "minas", idade: 25 },
    { nome: "douglas", idade: 28 },
    { nome: "dom", idade: 33 },
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho("minas Gerais"));
console.log(chamarEcho(1254));
/*****Generics em classe */
class OperacaoBinaria {
    constructor(operador1, operador2) {
        this.operador1 = operador1;
        this.operador2 = operador2;
    }
}
/*console.log(new OperacaoBinaria(1,2).executar())
console.log(new OperacaoBinaria('Elis','flausino').executar)
console.log(new OperacaoBinaria('elis',35).executar())
console.log(new OperacaoBinaria({},{}).executar())*/
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operador1 + this.operador2;
    }
}
/*console.log(new SomaBinaria(3,4).executar())
console.log(new SomaBinaria(10,50).executar())*/
class OperacaoCOmData extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operador1);
        const t2 = this.getTime(this.operador2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dias`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 5, 2022);
console.log(new OperacaoCOmData(d1, d2).executar());
/********Retriçoes com generics **** */
class Restricao {
    constructor(...args) {
        this.fila = args;
    }
    entrar(element) {
        this.fila.push(element);
    }
    proximo() {
        if (this.fila.length > 0) {
            const proximo = this.fila[0];
            this.fila.splice(0, 1);
            return proximo;
        }
        else {
            return null;
        }
    }
    imprmi() {
        console.log(this.fila);
    }
}
const r = new Restricao("aline", "bruna", "tieta", "maria", "monica");
f.imprmi();
f.entrar("elias");
f.imprmi();
console.log(f.proximo());
console.log(f.proximo());
console.log(f.proximo());
f.imprmi();
const rr = new Restricao(1, 2, 3, 4, 5, 6);
f.imprmi();
f.entrar("elias");
f.imprmi();
console.log(f.proximo());
console.log(f.proximo());
console.log(f.proximo());
f.imprmi();
