"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function login(target) {
    console.log(target);
}
let foo = class foo {
};
foo = __decorate([
    login
], foo);
/*************************** */
function Logger(prefix) {
    return (j) => {
        console.log(`${prefix}  - ${j}`);
    };
}
let rtc = class rtc {
};
rtc = __decorate([
    Logger("minas")
], rtc);
/****************** */
//@logarObjeto
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log("novo...");
    }
};
Eletrodomestico = __decorate([
    imprimivel
], Eletrodomestico);
function DecoratorVazio(_) { }
function LoggarClasse(construtor) {
    console.log(construtor);
}
function logarClasseSe(valor) {
    return valor ? LoggarClasse : DecoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + " " + obj.b);
    };
}
function logarObjeto(construtor) {
    console.log("Carregando");
    return class extends construtor {
        constructor(...args) {
            console.log("Antes...");
            super(...args);
            console.log("Depois ...");
        }
    };
}
// new Eletrodomestico()
// new Eletrodomestico()
// new Eletrodomestico()
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
//new Eletrodomestico().imprimir()
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
class contaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor < this.saldo)
            return this.saldo - valor;
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], contaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar
], contaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], contaCorrente.prototype, "getSaldo", null);
const cc = new contaCorrente(12750.3);
cc.sacar(5000);
cc.getSaldo();
/*cc.getSaldo = function(){
    return this['saldo'] +7000
}*/
/*** criano um decorator  para o metodo , não sera possivel reescrever o metodo */
function congelar(alvo, nomeMetodo, descritor) {
    descritor.writable = false;
}
/****Escrevendo um metodo para propriedade****** */
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo["_" + nomePropriedade];
        },
        set: function (valo) {
            if (valor < 0) {
                throw new Error("Saldo Inválido");
            }
            else {
                alvo["_" + nomePropriedade] = valor;
            }
        },
    });
}
/*****Decorator de objeto ****/
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log(`Alvo: ${alvo}`);
    console.log(`Metodo: ${nomeMetodo}`);
    console.log(`Indice Param: ${indiceParam}`);
}
