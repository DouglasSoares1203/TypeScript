"use strict";
class Produto {
    constructor(nome, preco, desconto = 0.0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$: ${this.preco} com ${this.desconto * 100} em off`;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
const produto1 = new Produto("Morango", 10.56, 0.3);
console.log("produto1", produto1);
const produto2 = new Produto("Abacaxi", 14.47);
console.log("produto2", produto2);
console.log(produto1.resumo());
console.log(produto2.resumo());
console.log("desconto", produto1.precoComDesconto().toFixed(2));
