"use strict";
function saudarOlaComNome(pessoa) {
    console.log("ola  " + pessoa.nome);
}
function MudarNome(pessoa) {
    pessoa.nome = "Minas";
}
const pessoa = {
    nome: "Diego",
    idade: 27,
    saudar(sobrenome) {
        console.log("Meu nome é:" + this.nome + "e o meu sobrenome é:" + sobrenome);
    },
};
saudarOlaComNome(pessoa);
MudarNome(pessoa);
saudarOlaComNome(pessoa);
//saudarOlaComNome({nome:'Dom', idade:87, mm:'AAAA'})
pessoa.saudar("Veiga");
/********usando inteface com classes ****/
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date(); // a calsse pode implementar mais atributos que não esteja na interface
    }
    saudar(sobrenome) {
        console.log("Ola meu nome é " + this.nome + " e meu sobrenome é" + sobrenome);
    }
}
const meuCLiente = new Cliente();
meuCLiente.nome = "Diego";
saudarOlaComNome(meuCLiente);
meuCLiente.saudar("Roberto");
console.log(meuCLiente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    return Array(exp)
        .fill(base)
        .reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(3 ** 10);
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstractABS {
    a() { }
    b() { }
}
