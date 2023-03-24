"use strict";
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(28, 2, 1996);
console.log((aniversario.dia = 4));
console.log(aniversario);
class DataComValorPadrao {
    constructor(dia = 1, mes = 2, ano = 2008) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioComPadrao = new DataComValorPadrao(1990);
console.log((aniversario.dia = 4));
console.log(aniversario);
class DataEsperta {
    constructor(dia = 1, mes = 3, ano = 1996) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 2003);
console.log("aniversarioEsperto", aniversarioEsperto.dia);
aniversarioEsperto.mes = 8;
console.log("aniversarioEsperto", aniversarioEsperto.mes);
/******metodos protected**********/
class Carro {
    constructor(marcar, modelo, velocidadeMaxima = 200) {
        this.marcar = marcar;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velcoidadeAtual = 0;
    }
    alterarVelocidae(delta) {
        const novaVelocidade = this.velcoidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velcoidadeAtual = novaVelocidade;
        }
        else {
            this.velcoidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velcoidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidae(5);
    }
    frear() {
        return this.alterarVelocidae(-5);
    }
}
const fusca = new Carro("Fusca", "volks", 140);
console.log(fusca);
console.log(fusca.acelerar());
console.log(fusca.acelerar());
console.log(fusca.acelerar());
console.log(fusca.frear());
Array(50)
    .fill(0)
    .forEach(() => fusca.acelerar());
console.log(fusca.acelerar());
/******herança********/
/***Para que eu possa usar os atributo e metodos na classe filha os mesmo necessitam ser protected */
class ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidae(20);
    }
    frear() {
        return this.alterarVelocidae(-15);
    }
}
const f40 = new ferrari("F40", 356);
console.log(f40);
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.acelerar());
/****Get & Sets ******/
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        this._idade = valor;
    }
}
const pessoa1 = new Pessoa();
pessoa1.idade = 24;
console.log("idade", pessoa1.idade);
/****Atributos e metodos staticos****/
class Matematica {
    static caculaArea(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.14;
console.log(Matematica.caculaArea(10));
/********Classe abstrata****/
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma1 extends Calculo {
    executar(...numeros) {
        return (this.resultado = numeros.reduce((a, b) => a + b));
    }
}
class Multiplicar1 extends Calculo {
    executar(...numeros) {
        return (this.resultado = numeros.reduce((a, b) => a * b));
    }
}
const s = new Soma1();
s.executar(1, 2, 3, 4, 5, 6);
console.log("SOMA", s.getResultado());
const m = new Multiplicar1();
m.executar(2, 2, 2);
console.log("MULTIPLICAR", m.getResultado());
///**********Sigleton******** */
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date();
    }
}
Unico.instance = new Unico();
//const errado = new Unico()
console.log(Unico.getInstance().agora());
/*****Somente leitura ****** */
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao("Tu-114", "PT-BAC");
//turboHelice.modelo='abcde'
//turboHelice.prefixo='PT-GHF'
console.log(turboHelice);
